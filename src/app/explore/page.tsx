'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  OutlinedInput,
} from '@mui/material';
import Container from 'src/components/shared/container';
import { fetchNasdaqStocks } from '../../services/polygonApi';
import { PolygonTicker, SearchFilter } from '../../types';
import Grid from '@mui/material/Grid2';
import useScrollPosition from 'src/hooks/useScrollPosition';
import { Formik } from 'formik';
import * as Yup from 'yup';
import debounce from 'lodash/debounce';

export default function NasdaqStocks(): JSX.Element {
  const initialValues: SearchFilter = {
    searchKeyword: '',
  };

  const [allStocks, setAllStocks] = useState<PolygonTicker[]>([]);
  const [filteredStocks, setFilteredStocks] = useState<PolygonTicker[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(21);
  const [loading, setLoading] = useState<boolean>(true);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const debouncedFilterStocks = useCallback(
    debounce((searchKeyword: string) => {
      if (searchKeyword.trim() === '') {
        setFilteredStocks(allStocks);
      } else {
        const lowerCaseKeyword = searchKeyword.toLowerCase();
        const matchedStocks = allStocks.filter(
          (stock) =>
            stock.ticker.toLowerCase().includes(lowerCaseKeyword) ||
            stock.name.toLowerCase().includes(lowerCaseKeyword)
        );
        setFilteredStocks(matchedStocks);
      }
    }, 300),
    [allStocks]
  );

  const handleSearchChange = (searchKeyword: string) => {
    debouncedFilterStocks(searchKeyword);
  };

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const data = await fetchNasdaqStocks();
      setAllStocks(data);
      setFilteredStocks(data);
      setLoading(false);
    }
    getData();
  }, []);

  useScrollPosition(
    ({ currPos }: { currPos: { x: number; y: number } }) => {
      const isNearBottom = currPos.y < -window.innerHeight / 2;
      if (isNearBottom && !isFetching && visibleCount < filteredStocks.length) {
        setIsFetching(true);
        setTimeout(() => {
          setVisibleCount((prev) => prev + 12);
          setIsFetching(false);
        }, 1000);
      }
    },
    [visibleCount, isFetching, filteredStocks.length],
    undefined,
    undefined,
    300
  );

  return (
    <Container>
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="50vh"
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Box mb="2rem" mt="2rem">
            <Formik
              initialValues={initialValues}
              validationSchema={Yup.object().shape({
                searchKeyword: Yup.string(),
              })}
              onSubmit={() => {}}
            >
              {({ values, handleChange }) => (
                <form style={{ width: '100%' }}>
                  <Grid container mb="2rem">
                    <Grid size={12}>
                      <OutlinedInput
                        placeholder="Search for stocks..."
                        fullWidth
                        id="outlined-basic"
                        color="secondary"
                        name="searchKeyword"
                        value={values.searchKeyword}
                        onChange={(e) => {
                          handleChange(e);
                          handleSearchChange(e.target.value);
                        }}
                        sx={{
                          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                          borderRadius: '8px',
                        }}
                      />
                    </Grid>
                  </Grid>
                </form>
              )}
            </Formik>
            <Grid container spacing={2} alignItems="stretch">
              {filteredStocks.length > 0 ? (
                filteredStocks.slice(0, visibleCount).map((stock) => (
                  <Grid
                    size={{ xs: 6, md: 3, sm: 6, lg: 3 }}
                    key={stock.ticker}
                  >
                    <Card
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        border: '1px solid #ccc',
                        padding: '1rem',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        borderRadius: '8px',
                        minHeight: '100%',
                      }}
                    >
                      <CardContent>
                        <Typography variant="h4" mb={1}>
                          {stock.ticker}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {stock.name}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))
              ) : (
                <Box
                  width="100%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  minHeight="20vh"
                >
                  <Typography variant="h5" color="secondary">
                    No stocks found.
                  </Typography>
                </Box>
              )}
            </Grid>
          </Box>
          {isFetching && (
            <Box display="flex" justifyContent="center" mb="5vw">
              <CircularProgress />
            </Box>
          )}
        </>
      )}
    </Container>
  );
}
