import React, { useState } from 'react';
import { TableContainer, Table, TableBody, TableCell, TableRow, Typography, TablePagination, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux'
import {  fetchTracks } from '../store/trackSlice';


const SearchResultTable = ({result}) => {

  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);

  const handleChangePage = (newPage) => {
    setPage(newPage)
  }
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 3));
    setPage(0);
  };

return (
<>
{result
  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  .map(x => {
  return (
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <img  src={`${x.snippet.thumbnails.default.url}`}/>
            </TableCell>
            <TableCell>
              <Typography>{x.snippet.title}</Typography>
            </TableCell>
            <TableCell>
              <Button type="primary"  onClick={() => dispatch(fetchTracks(x.id.videoId))} >Add to Queue</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
})}
  <TablePagination  
    page={page}
    rowsPerPage={rowsPerPage}
    onChangePage={handleChangePage}
    onChangeRowsPerPage={handleChangeRowsPerPage}
    count={result.length} 
    color="primary" /> 
  </>
  )
};

export default SearchResultTable;



