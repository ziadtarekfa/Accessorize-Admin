import '../componentStyles/pagination.css';
const Pagination = ({ totalUsers, pageNumber, setPageNumber }) => {

    const pageNumbers = [];
    const NO_OF_USERS_PER_PAGE = 5;


    for (let i = 1; i <= Math.ceil(totalUsers.length / NO_OF_USERS_PER_PAGE); i++) {
        pageNumbers.push(i);
    }

    const getPreviousPage = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber + -1)
        }
    }
    const getNextPage = () => {
        if (pageNumber < Math.ceil(totalUsers.length / NO_OF_USERS_PER_PAGE)) {
            setPageNumber(pageNumber + 1);
        }
    }

    return (
        <div className='pagination'>
            <button onClick={getPreviousPage} className='not-active'>{'<'}</button>
            {
                pageNumbers.map((num) => {
                    console.log(num + " " + pageNumber);
                    return (
                        <button className={num === pageNumber ? 'active' : 'not-active'} key={`btn_${num}`} onClick={() => {
                            setPageNumber(num);
                        }}>{num}</button>
                    )

                })
            }
            <button onClick={getNextPage} className='not-active'>{'>'}</button>
        </div >
    );
}

export default Pagination;
