export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';

export const toggleFavorite = (id) => {
    return { type: TOGGLE_FAVORITE,
            mealId: id
    };
};

export const setFilters = filterSettings => {
    return {
        type: SET_FILTERS, filters: filterSettings };
        // action with object(filterSetting which has all true or false
        // values
        
    
};