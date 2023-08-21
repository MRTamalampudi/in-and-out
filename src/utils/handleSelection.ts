export const HandleSelection = (selectionList:number[],id:number,chekced:boolean):number[] => {
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