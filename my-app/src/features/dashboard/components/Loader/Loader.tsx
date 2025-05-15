import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import ContainerLoader from "./ContainerLoader";
import { MarketData } from "types";
import { useInfiniteTickers, LOADED, LOADING } from "features/dashboard/hooks/useInfiniteTickers";

interface Props { tick: MarketData[];}
export default function Loader({tick}: Props) {
  const {isItemLoaded, loadMore, items, itemStatusMap} = useInfiniteTickers({tick});
  
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