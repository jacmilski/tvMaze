export const getShowsByKey = key => {
    fetch(`http://api.tvmaze.com/search/shows?q=${key}`).then(respo => respo.json());
}

export const getShowsById = id => {
    fetch(`http://api.tvmaze.com/shows/${id}?embed=cast`).then(respo => respo.json())
}


