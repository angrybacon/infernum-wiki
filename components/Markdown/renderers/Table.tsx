import {
  Table as MuiTable,
  TableBody as MuiTableBody,
  TableCell as MuiTableCell,
  TableHead as MuiTableHead,
  TableRow as MuiTableRow,
  TableContainer,
} from '@mui/material';
import { type Components } from 'react-markdown';

export const Table: Components['table'] = ({ children }) => (
  <TableContainer
    sx={({ shape }) => ({
      border: 1,
      borderColor: 'divider',
      borderRadius: shape.borderRadius,
    })}
  >
    <MuiTable>{children}</MuiTable>
  </TableContainer>
);

export const TableBody: Components['tbody'] = ({ children }) => (
  <MuiTableBody>{children}</MuiTableBody>
);

export const TableCell: Components['td'] = ({ children }) => (
  <MuiTableCell sx={{ borderColor: 'divider' }}>{children}</MuiTableCell>
);

export const TableHead: Components['thead'] = ({ children }) => (
  <MuiTableHead>{children}</MuiTableHead>
);

export const TableRow: Components['tr'] = ({ children }) => (
  <MuiTableRow sx={{ '&:last-child td': { borderBottom: 0 } }}>
    {children}
  </MuiTableRow>
);
