/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { OverridableStringUnion } from '@mui/types';

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        containedPrimary: true;
        outlinedPrimary: true;
        containedSecondary: true;
    }
}
/* eslint-enable unused-imports/no-unused-imports */
/* eslint-enable @typescript-eslint/no-unused-vars */
