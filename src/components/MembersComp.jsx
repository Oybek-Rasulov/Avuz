import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: 18,
    backgroundColor: "#9195F6",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#DFD3C3",
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat) {
  return { name, calories, fat};
}



const rows = [
  createData('1', "Абдурахимов Зохид Абдувасикович", "ЎВА ижрочи директори"),
  createData('2', "Акилов Хабибулло Атауллаевич", "ТошВМОИ ректори"),
  createData('3', "Алимов Анвар Валиевич",  "РИЭИАТМ директори "),
  createData('4', "Асадов Дамин Абдурахимович", "ТошВМОИ нинг “Соғлиқни сақлашни ташкил қилиш, бошқариш ва молиялаштириш” кафедраси мудири"),
  createData('5', "Воисов Адхам Шавкатович",  "ТТА кафедра профессори, Ўзбекистон хусусий врачлар ассоциацияси раиси"),
  createData('6', "Вихров Игорь Петрович",  "ТошПТИ илмий ходими"),
  createData('7', "Дадабаева Раъно Қудратовна",  "ТТА кафедра мудири, ЎВА Умумий амалиёт врачлари бўлими раиси"),
  createData('8', "Искандаров Тўлқин Искандарович",  "Ўзбекистон фанлар академияси академиги, ЎВА раис ўринбосари"),
  createData('9', "Кариев Гайрат Маратович",  "РИНИАТМ директори"),
  createData('10', "Мухтаров Шухрат Турсунович",  "РИУИАТМ директори"),
  createData('11', "Ризамухамедова Машкура Закировна",  "ТТА ревматология кафедраси мудири, ЎВА ревматологлар  бўлими раиси"),
  createData('12', "Рустамова Мамлакат Тулебаевна",  "ТТА умумий амалиёт врачлари кафедраси мудири, ЎВА мустақил экспертиза маркази  раиси"),
  createData('13', "Одилова Барно Турсуновна",  "Ўзбекистон врачлар ассоциациясининг Умумий амалиёт шифокорлари бўлими раиси"),
  createData('14', "Сидиков Зафар Умарович",  "ЎВА раиси "),
  createData('15', "Собиров Жўра Марифбоевич",  "ТошВМОИ кафедра мудири"),
  createData('16', "Турсунов Эркин Атабаевич",  "ТошПМИ кафедра профессори, Фахрий врачлар қўмитаси раиси"),
  createData('17', "Шайхова Холида Эркиновна",  "ТТАотоларингология кафедраси профессори, ЎВА Отоларингологлар бўлими раиси"),
  createData('18', "Уразалиев Базарбай Хайитбаевич",  "Беруний тумани марказий шифохонаси, бўлим мудири"),
  createData('19', "Рахимқулов Фарход Абдурауфович",  "Соғликни сақлаш вазирлигининг лицензиялаш ва нодавлат муассасаларда тиббий хизмат сифатини назорат қилиш бошқармаси бошлиғи"),
  createData('20', "Комилов Холидбек Махамаджонович ",  "Ўзбекистон қахрамони, т.ф.д., профессор "),
  createData('21', "Гафур Ахунов Мирза Алиёрович",  "Тошкент врачлар малакасини ошириш институти профессори"),
  createData('22', "Юлдашев Акмал Ахмаджонович",  "Умид Гулшани саноторияси директори"),
  createData('23', "Мавлонов Санжар Фозилович",  "ЎВА Тошкент шахар бўлими раиси"),
  createData('24', "Қодиров Холиёр Холматович",  "ЎВА Қашкадарё вилояти бўлими ижрочи директори"),
  createData('25', "Одилова Мақсуда Гапаровна",  "ЎВА Навоий вилояти бўлими раиси"),
  createData('26', "Сатторов Мустафо Жумаевич",  "ЎВА Сурхандарё вилояти бўлими раиси"),
  createData('27', "Маматханова Дилором Шарифжановна",  "ЎВА Наманган вилояти бўлими раиси"),
  createData('28', "Холбекова Юлдуз Кимсановна",  "ЎВА Андижон вилояти бўлими раиси"),
  createData('29', "Бегалиев Саламат Максетбаевич",  "ЎВА Қоракалпогистон Республикаси бўлими раиси"),
  createData('30', "Мавланов Файзилла Казакович",  "ЎВА Сирдарё вилояти бўлими раиси"),
  createData('31', "Палванова Светлана Ибрагимовна",  "ЎВА Хоразм вилояти бўлими раиси"),
  createData('32', "Юлдашева  Феруза Эркиновна",  "ЎВА Тошкент вилоят бўлими раиси"),
  createData('33', "Содиков Минаввар Гайбуллаевич",  "ЎВА Жиззах вилояти бўлими раиси"),
  createData('34', "Шукурлаев Асад Шукурлаевич",  "ЎВА Бухоро вилоят бўлими раиси"),
  createData('35', "Муминов Сайфиддин Очилович",  "ЎВА Самарканд вилоят бўлими раиси"),
  createData('36', "Пулатов Шавкат Боқижонович",  "ЎВА Фарғона вилояти бўлими раиси"),
];

function createData2(number, fullName, text) {
  return { number, fullName, text };
  }

  const rows2 = [
    createData2('1', "Усманходжаев М.С.", "Республика Меҳр-шафқат ва саломатлик фонди, тафтиш комияссияси раиси"),
    createData2('2', "Хасанов С.А.", "ТошПМИ кафедра профессори, тафтиш комияссияси аъзоси "),
    createData2('3', "Абдихакимов Абдулла Нусратиллаевич", "РИОва РИАТМ Тошкент вилоят филиали директори")
  ];

  function createData3(number, fullName, text) {
    return { number, fullName, text };
    }
  
    const rows3 = [
      createData3('1', "Абдурахимов Зохид Абдувасикович", "ЎВА ижрочи директори"),
      createData3('2', "Дадабаева Раъно Қудратовна", "ТТА кафедра мудири, ЎВА Умумий амалиёт врачлари бўлими раиси"),
      createData3('3', "Искандаров Тўлқин Искандарович", "Ўзбекистон фанлар академияси академиги, ЎВА раис ўринбосари"),
      createData3('4', "Мухтаров Шухрат Турсунович", "РИУИАТМ директори"),
      createData3('5', "Рустамова Мамлакат Тулебаевна", "ТТА кафедра мудири, ЎВА мустақил экспертиза маркази раиси"),
      createData3('6', "Сидиков Зафар Умарович", "ЎВА раис"),
      createData3('7', "Турсунов Эркин Атабоевич", "ТошПМИ кафедра мудири"),
      createData3('8', "Шайхова Холида Эркиновна", "ТТА кафедра профессори, ЎВА отоларингология бўлими раиси"),
      createData3('9', "Юлдашев Акмал Ахмаджанович", "Умид Гулшани саноторияси директори"),
      createData3('10', "Воисов Адхам Шавкатович", "ТТА кафедра профессори, Ўзбекистон хусусий врачлар ассоциацияси раиси"),
      createData3('11', "Одилова Баърно Турсуновна", ""),
      createData3('12', "Мавлянходжаев Равшан Шухратович", "")
    ]

export default function MembersComp() {
  return (
    <div className='archieve'>
      <h2 className='text'>
        Ўзбекистон врачлар ассоциациясининг 
      </h2>
      <h4 className='text'>
        Кенгаш аъзолари, тафтиш комиссияси ва делегатларнинг рўйхати
      </h4>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>№</StyledTableCell>
                <StyledTableCell align="left">Ф.И.Ш.</StyledTableCell>
                <StyledTableCell align="left">Иш жойи</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                    {row.name}
                </StyledTableCell>
                <StyledTableCell align="left">{row.calories}</StyledTableCell>
                <StyledTableCell align="left">{row.fat}</StyledTableCell>

                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>

        <h3 className='text'>Ўзбекистон врачлар Ассоциациясининг раёсатининг таркиби</h3>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>№</StyledTableCell>
                <StyledTableCell align="left">Ф.И.Ш.</StyledTableCell>
                <StyledTableCell align="left">Иш жойи</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows3.map((row) => (
                <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                    {row.number}
                </StyledTableCell>
                <StyledTableCell align="left">{row.fullName}</StyledTableCell>
                <StyledTableCell align="left">{row.text}</StyledTableCell>

                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>

        <h3 className='text' style={{padding: "3rem"}}>Ўзбекистон врачлар Ассоциациясининг <br /> тафтиш комиссиясининг таркиби</h3>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableBody>
            {rows2.map((row) => (
                <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                    {row.number}
                </StyledTableCell>
                <StyledTableCell align="left">{row.fullName}</StyledTableCell>
                <StyledTableCell align="left">{row.text}</StyledTableCell>

                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
  );
}
