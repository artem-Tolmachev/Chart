import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import ContainerLoader from "./ContainerLoader";
import { MarketData } from "types";
import { useInfiniteTickers, LOADED, LOADING } from "features/dashboard/hooks/useInfiniteTickers";

interface Props { tick: MarketData[];}
export default function Loader({tick}: Props) {
  const {isItemLoaded, loadMore, items, itemStatusMap} = useInfiniteTickers({tick});

  
  // const [items, setItems] = useState<MarketData[]>([]);
  // const LOADING = 1;
  // const LOADED = 2;
  // const isItemLoaded: (index: number) => boolean = index => !!itemStatusMap[index];

  // const fetchItems = (startIndex: number, stopIndex: number) => {
  //   const fetched = tick.slice(startIndex, stopIndex + 1);
  //   return Promise.resolve(fetched);
  // };

  // const loadMore = async (startIndex: number, stopIndex: number) => {
  //   const newItems = await fetchItems(startIndex, stopIndex);
  //   setItems(prev => {
  //     const updated = [...prev];
  //     for (let i = 0; i < newItems.length; i++) {
  //       updated[startIndex + i] = newItems[i];
  //       itemStatusMap[startIndex + i] = LOADED;
        
  //     }      
  //     return updated;
  //   });
  // };

  // useEffect(() => {
  //    itemStatusMap = {}; 
  //    loadMore(0, 9)
  // },[tick])
  
  return (
    <>
      <InfiniteLoader
        isItemLoaded={isItemLoaded}
        itemCount={tick.length}
        loadMoreItems={loadMore}
      >
        {({ onItemsRendered, ref }) => (
          <List
            className="List"
            height={250}
            itemCount={tick.length}
            itemSize={50}
            onItemsRendered={onItemsRendered}
            ref={ref}
            width='100%'
            itemData={{
              items,
              itemStatusMap,
              LOADED,
              LOADING,
            }}
          >
            {ContainerLoader}
          </List>
        )}
      </InfiniteLoader>
    </>
  );
}