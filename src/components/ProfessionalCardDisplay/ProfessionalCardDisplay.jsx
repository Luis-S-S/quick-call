import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProCard from '../Procard/ProCard';
import { getAllProfessional } from '../../services/professional';
import { urlQueryParamValuesToArray, removeQueryValueFromObject } from '../../services/general';
import './ProfessionalCardDisplay.scss';

function ProfessionalCardDisplay() {
  const searchFilters = urlQueryParamValuesToArray(window.location.href);
  const [pro, setPro] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [professionalsToShow, setProfessionalsToShow] = useState([]);
  const cardPerPage = 6;

  const selectCardToShow = (page) => {
    const indexOfLastCard = page * cardPerPage;
    const indexOfFirstCard = indexOfLastCard - cardPerPage;
    const currentProfessionals = pro.slice(indexOfFirstCard, indexOfLastCard);
    setProfessionalsToShow(currentProfessionals);
  };

  const handlerOnClickRemove = (e) => {
    setSearchParams(removeQueryValueFromObject(window.location.href, e.target.value));
    setCurrentPage(1);
  };

  const handlerOnClickPrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  const handlerOnClickNext = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    setCurrentPage(1);
    getAllProfessional(window.location.search).then((data) => {
      setPro(data);
    });
  }, [searchParams]);

  useEffect(() => {
    setPages(Math.ceil(pro.length / cardPerPage));
    selectCardToShow(currentPage);
  }, [pro]);

  useEffect(() => {
    selectCardToShow(currentPage);
  }, [currentPage]);

  return (
    <div className="card-display__container">
      {searchFilters.length > 0 && (
        searchFilters.map((filter) => (
          <div className="card-filters">
            {filter}
            <button value={filter} type="button" className="card-filters__remove" onClick={handlerOnClickRemove}>x</button>
          </div>
        ))
      )}
      <div className={professionalsToShow.length > 0 ? 'grid' : 'search--error'}>
        {professionalsToShow.length > 0
          ? (professionalsToShow.map((item) => <ProCard key={item._id} details={item} />))
          : 'hubo un error'}
      </div>
      <button
        className={`page-handling__button ${currentPage === 1 ? 'disabled' : ''}`}
        type="button"
        onClick={handlerOnClickPrevious}
      >
        Anterior
      </button>
      <button
        className={`page-handling__button ${currentPage >= pages ? 'disabled' : ''}`}
        type="button"
        onClick={handlerOnClickNext}
      >
        Siguiente
      </button>
    </div>
  );
}

export default ProfessionalCardDisplay;
