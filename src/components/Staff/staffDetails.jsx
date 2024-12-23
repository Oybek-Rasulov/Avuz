
export default function StaffComp() {

    // if(lan === true) {
    //   var rows = [
    //       createData('Ассоциации врачей нейрохирургов', "КариевГайрат Маратович", 126),
    //       createData('Ассоциации врачей частной практики', "Ваисов Атхам Шавкатович", 9.0),
    //       createData('Ассоциации валеологов Узбекистана', "Председатель Иргашев Шухрат Баисович", 16.0),
    //       createData('Отделение санитарных врачей и гигиенистов', "Искандаров Тулкин Искандарович", 3.7),
    //       createData('Отделение иглорефлексотерапевтов', "Ли Павел Андреевич", 16.0),
    //     ]
    // } else {
    //   var rows = [
    //     createData('Нейрохирурглар уюшмаси', "КариевГайрат Маратович", 126),
    //     createData('Хусусий амалиёт шифокорлари уюшмалари', "Ваисов Атхам Шавкатович", 9.0),
    //     createData('Ўзбекистон валеологлари уюшмаси', "Председатель Иргашев Шухрат Баисович", 16.0),
    //     createData('Санитария шифокорлари ва гигиенистлар бўлими', "Искандаров Тулкин Искандарович", 3.7),
    //     createData('Акупунктур бўлими', "Ли Павел Андреевич", 16.0),
    //   ];
    // }

    //   const StyledTableCell = styled(TableCell)(({ theme }) => ({
    //     [`&.${tableCellClasses.head}`]: {
    //       backgroundColor: theme.palette.common.black,
    //       color: theme.palette.common.white,
    //     },
    //     [`&.${tableCellClasses.body}`]: {
    //       fontSize: 14,
    //     },
    //   }));

    //   const StyledTableRow = styled(TableRow)(({ theme }) => ({
    //     '&:nth-of-type(odd)': {
    //       backgroundColor: theme.palette.action.hover,
    //     },
    //     // hide last border
    //     '&:last-child td, &:last-child th': {
    //       border: 0,
    //     },
    //   }));
      
    //   function createData(name, calories, fat, carbs, protein) {
    //     return { name, calories, fat, carbs, protein };
    //   }

    return (
        <div className='staff-table'>
            {/* "Коллектив аъзолар ҳақида маълумот" */}
            <h2 className='news-title'>{"Информация о коллективных членах"}</h2>
            {/* <TableContainer component={Paper}>
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
            </TableContainer> */}

            <table>
                <thead>
                    <tr>
                        <th>Название организации</th>
                        <th>Председатель АВУ</th>
                        <th>Количество членов</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ассоциации врачей нейрохирургов</td>
                        <td>Кариев Гайрат Маратович</td>
                        <td>126</td>
                    </tr>
                    <tr>
                        <td>Ассоциации врачей частной практики</td>
                        <td>Ваисов Атхам Шавкатович</td>
                        <td>9.0</td>
                    </tr>
                    <tr>
                        <td>Ассоциации валеологов Узбекистана</td>
                        <td>Председатель Иргашев Шухрат Баисович</td>
                        <td>16.0</td>
                    </tr>
                    <tr>
                        <td>Отделение санитарных врачей и гигиенистов</td>
                        <td>Искандаров Тулкин Искандарович</td>
                        <td>3.7</td>
                    </tr>
                    <tr>
                        <td>Отделение иглорефлексотерапевтов</td>
                        <td>Ли Павел Андреевич</td>
                        <td>16.0</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}