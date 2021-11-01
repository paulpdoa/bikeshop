const PartPagination = ({ partsPerPage, paginate, totalParts }) => {
    
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalParts / partsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="">
            <ul className="flex justify-center gap-2">
               { pageNumbers.map((number) => (
                   <li className="cursor-pointer" onClick={() => paginate(number)} key={number}>
                       <span className="border-2 border-gray-900 rounded p-2 font-semibold hover:bg-gray-400 hover:text-gray-100 transition duration-300">{number}</span>
                   </li>
               )) }
            </ul>
        </nav>
    )
}

export default PartPagination
