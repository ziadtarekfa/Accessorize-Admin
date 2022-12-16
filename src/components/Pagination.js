import '../componentStyles/pagination.css';
const Pagination = ({ totalUsers, currentPageNumber, setCurrentPageNumber }) => {

    const pageNumbers = [];
    const NO_OF_USERS_PER_PAGE = 5;


    for (let i = 1; i <= Math.ceil(totalUsers.length / NO_OF_USERS_PER_PAGE); i++) {
        pageNumbers.push(i);
    }

    const getPreviousPage = () => {
        if (currentPageNumber > 1) {
            setCurrentPageNumber(currentPageNumber + -1)
        }
    }
    const getNextPage = () => {
        if (currentPageNumber < Math.ceil(totalUsers.length / NO_OF_USERS_PER_PAGE)) {
            setCurrentPageNumber(currentPageNumber + 1);
        }
    }

    return (
        <div className='pagination'>
            <button onClick={getPreviousPage} className='not-active'>{'<'}</button>
            {
                pageNumbers.map((num) => {
                    return (
                        <button className={num === currentPageNumber ? 'active' : 'not-active'} key={`btn_${num}`} onClick={() => {
                            setCurrentPageNumber(num);
                        }}>{num}</button>
                    )

                })
            }
            <button onClick={getNextPage} className='not-active'>{'>'}</button>
        </div >
    );
}

export default Pagination;
