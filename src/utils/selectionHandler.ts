export function selectionHandler(selectionList:number[], id:number, chekced:boolean):number[]{
    const index:number = selectionList.indexOf(id);
  if(chekced){
      return [...selectionList,id]
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
    selectedList:number[],
    checked:boolean
):number[] {
    if(checked){
        data.map(data1=>{
            if (!(selectedList.includes(data1.id))) {
                selectedList.push(data1.id);
            }
        })
        return [...selectedList];
    } else {
        return [];
    }
}