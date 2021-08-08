export const onClickCard = (pathname: string, history: {push: (pathname: string)=>void}) => history.push(pathname);

export const generateRestaurantPathName = (id: string)=> `/r/${id}/breakfast` ;