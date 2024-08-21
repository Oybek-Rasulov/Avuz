import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function StaffComp(props) {

    var lan = props.exportLanguage

    if(lan === true) {
      var rows = [
          createData('Ассоциации врачей нейрохирургов', "КариевГайрат Маратович", 126),
          createData('Ассоциации врачей частной практики', "Ваисов Атхам Шавкатович", 9.0),
          createData('Ассоциации валеологов Узбекистана', "Председатель Иргашев Шухрат Баисович", 16.0),
          createData('Отделение санитарных врачей и гигиенистов', "Искандаров Тулкин Искандарович", 3.7),
          createData('Отделение иглорефлексотерапевтов', "Ли Павел Андреевич", 16.0),
        ]
    } else {
      var rows = [
        createData('Нейрохирурглар уюшмаси', "КариевГайрат Маратович", 126),
        createData('Хусусий амалиёт шифокорлари уюшмалари', "Ваисов Атхам Шавкатович", 9.0),
        createData('Ўзбекистон валеологлари уюшмаси', "Председатель Иргашев Шухрат Баисович", 16.0),
        createData('Санитария шифокорлари ва гигиенистлар бўлими', "Искандаров Тулкин Искандарович", 3.7),
        createData('Акупунктур бўлими', "Ли Павел Андреевич", 16.0),
      ];
    }

      const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));

      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      
      function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }

    return (
        <div className='staff-table'>
            <h2 className='news-title'>{lan? "Информация о коллективных членах": "Коллектив аъзолар ҳақида маълумот"}</h2>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell align='center'>{lan? "Название организации" : "Ташкилот номи"}</StyledTableCell>
                    <StyledTableCell align="center">{lan? "Председатель АВУ" : "АВУ раиси"}</StyledTableCell>
                    <StyledTableCell align="center">{lan? "Количество членов" : "Аъзолар сони"}&nbsp;</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                    <StyledTableCell align='center' component="th" scope="row">
                        {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.calories}</StyledTableCell>
                    <StyledTableCell align="center">{row.fat}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    )
}

export default StaffComp;