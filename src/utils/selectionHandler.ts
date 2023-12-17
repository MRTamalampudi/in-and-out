export function selectionHandler<T extends {id:number}>(selectionList:T[], entity:T, chekced:boolean):T[]{
    const index:number = selectionList.findIndex((data,index)=> data.id == entity.id)
  if(chekced){
      return [...selectionList,entity]
  } else {
      if (index > -1) {
          selectionList.splice(index, 1)
          return [...selectionList];
      } else {
          return selectionList;
      }
  }
}

export function selectAllHandler<T extends {id:number}>
(
    data:T[],
    selectedList:T[],
    checked:boolean
):T[] {
    if(checked){
        data.map(data1=>{
            if (!(selectedList.includes(data1))) {
                selectedList.push(data1);
            }
        })
        return [...selectedList];
    } else {
        return [];
    }
}