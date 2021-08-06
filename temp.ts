export class ClientFilterParams {
  companyIdAsk = '';
  main = true;
  priority = 999;
  monitoringType = '';
  responsibleRole = '';
  industryId = null;
  holdingId = null;
}

-----
import { SearchByType } from '../enums/SearchByType';
import { LocalDateCustom } from '../utils/LocalDateCustom';
import { localDateCustomNow, localDateCustomNowMinusDays } from '../utils/DateUtils';
import { ClientFilterParams } from './ClientFilterParams';

export class CommonFilter {
  page = 1; // newsfilter
  itemsPerPage = 10; // newsfilter
  dateFrom: LocalDateCustom = localDateCustomNowMinusDays(1); // newsfilter
  dateTo: LocalDateCustom = localDateCustomNow(); // newsfilter
  clientFilterParams: {
    // responsibleList mapping
    companyIdAsk: string;
    main: boolean;
    priority: number;
    monitoringType: string;
    responsibleRole: string;
    industryId: null;
    holdingId: null;
  }[] = [new ClientFilterParams()];
  newsFilterParams: {
    // newsfilter
    searchText: string;
    allNews: boolean;
    includeIndirectCompanies: boolean;
    eventId: string;
    showReadNews: boolean;
    substitutionNews: boolean;
    includeNewsByHolding: boolean;
  } = {
    searchText: '',
    allNews: false,
    includeIndirectCompanies: true,
    eventId: '',
    showReadNews: true,
    substitutionNews: false,
    includeNewsByHolding: true,
  };
  visionType = SearchByType.USER; // searchmode
  companySearchName = ''; // companySearchText
}

-----
export const getCompanyTableAction = () => async (dispatch, getState) => {
  dispatch(actions.setLoadingAction());

  const { currentSearchByType, companySearchText } = stateSelector(getState()).appStore;
  const { clientsForSearchModeAll } = stateSelector(getState()).visibleItemsStore;
  const { newsFilter } = stateSelector(getState()).newsFilterStore;
  const responsibleSubjects = getReselectUserResponsible(getState())();
  const monitoringTypes = monitoringTypeSelector(getState())();

  const searchMode = currentSearchByType === SearchByType.ALL && companySearchText.length > MIN_CHARS_FOR_SEARCH ? SearchByType.ATTR : currentSearchByType;

  const initialNewsFilter = getInitialNewsFilter(getState());
  const responsibleList = getResponsibleList(responsibleSubjects);
  // form commonfilter structre
  const commonFilter: CommonFilter = {
    page: newsFilter.page,
    itemsPerPage: newsFilter.itemsPerPage,
    dateFrom: newsFilter.dateFrom,
    dateTo: newsFilter.dateTo,
    clientFilterParams: responsibleSubjects.map(({ person, main, responsibleRole }, index) => ({
      companyIdAsk: person.id,
      main,
      priority: 999,
      monitoringType: monitoringTypes[index],
      responsibleRole: responsibleRole.id,
      industryId: null,
      holdingId: null,
    })),
    newsFilterParams: {
      searchText: newsFilter.searchText,
      allNews: newsFilter.allNews,
      includeIndirectCompanies: newsFilter.includeIndirectCompanies,
      eventId: newsFilter.eventId,
      showReadNews: newsFilter.showReadNews,
      substitutionNews: newsFilter.substitutionNews,
      includeNewsByHolding: newsFilter.includeNewsByHolding,
    },
    visionType: searchMode,
    companySearchName: companySearchText,
  };

  return getCompanyTable(commonFilter)
    .then((response) => {
      dispatch(actions.setVisibleItemsAction(response.rows));
      if (!clientsForSearchModeAll.length) {
        dispatch(actions.setClientsForSearchModeAllAction(response.rows));
      }
    })
    .catch(() => {
      dispatch(actions.setErrorAction());
      showRequestErrorNotification();
    });
};

-------
export const getCurrentCompanyCountersAction = () => (dispatch, getState) => {
  const { newsFilter } = stateSelector(getState()).newsFilterStore;
  const { currentSearchByType, companySearchText } = stateSelector(getState()).appStore;
  const responsibleSubjects = getReselectUserResponsible(getState())();
  const monitoringTypes = monitoringTypeSelector(getState())();

  const searchMode = currentSearchByType === SearchByType.ALL && companySearchText.length > MIN_CHARS_FOR_SEARCH ? SearchByType.ATTR : currentSearchByType;

  // form commonfilter structre
  const commonFilter: CommonFilter = {
    page: newsFilter.page,
    itemsPerPage: newsFilter.itemsPerPage,
    dateFrom: newsFilter.dateFrom,
    dateTo: newsFilter.dateTo,
    clientFilterParams: responsibleSubjects.map(({ person, main, responsibleRole }, index) => ({
      companyIdAsk: person.id,
      main,
      priority: 999,
      monitoringType: monitoringTypes[index],
      responsibleRole: responsibleRole.id,
      industryId: null,
      holdingId: null,
    })),
    newsFilterParams: {
      searchText: newsFilter.searchText,
      allNews: newsFilter.allNews,
      includeIndirectCompanies: newsFilter.includeIndirectCompanies,
      eventId: newsFilter.eventId,
      showReadNews: newsFilter.showReadNews,
      substitutionNews: newsFilter.substitutionNews,
      includeNewsByHolding: newsFilter.includeNewsByHolding,
    },
    visionType: searchMode,
    companySearchName: companySearchText,
  };

  console.info(commonFilter);

  getCounterForOneCompany(commonFilter).then((res) => {
    const clientRowTextStatusesAndCounters = {
      ...res,
      minTextDateByCompany: res.minTextDate,
    };
    dispatch(actions.updateCurrentCompanyCountersAction(newsFilter.companyId, clientRowTextStatusesAndCounters));
  });
};

------
export const getCompanyTable = (commonFilter: CommonFilter): Promise<CompanyTableResult> =>
  serviceDiscovery()
    .post(ApiInfo.SERVICE, ApiInfo.COMPANY_API, 'getClientsTable', commonFilter)
    .then((response) => response.data);

// export const getCompanyTable = (newsFilter: NewsFilterClass, companyName: string, searchBy: string, responsibleList: Responsible[]): Promise<CompanyTableResult> =>
//   serviceDiscovery()
//     .post(ApiInfo.SERVICE, ApiInfo.COMPANY_API, 'getClientsTable', { newsFilter, responsibleList }, { params: { companyName, searchBy } })
//     .then((response) => response.data);

export const getFavoriteCompanyTable = (favoriteTextToUserFilter: FavoriteTextToUserFilter): Promise<CompanyTableResult> =>
  serviceDiscovery()
    .post(ApiInfo.SERVICE, ApiInfo.COMPANY_API, 'getFavoriteCompanyTable', favoriteTextToUserFilter)
    .then((response) => response.data);
}

export const getCounterForOneCompany = (commonFilter: CommonFilter): Promise<ClientRowCounter> =>
  serviceDiscovery()
    .post(ApiInfo.SERVICE, ApiInfo.COMPANY_API, 'getCounterForOneCompany', commonFilter)
    .then((response) => response.data);