import { MarketData } from "types";
import { ListChildComponentProps } from 'react-window';
import TickerItem from "../TickerItem/TickerItem";
import TickerSckeleton from "../TickerSckeleton/TickerSckeleton";

type ItemData = {
  items: MarketData[];
  itemStatusMap: { [index: number]: number };
  LOADED: number;
  LOADING: number;
};

const ContainerLoader = ({ data, index, style }:
  ListChildComponentProps<ItemData>
) => {
  const item = data.items[index];
  const isLoaded = data.itemStatusMap[index] === data.LOADED;
  
  return (
    <div style={{ ...style, alignItems: 'center'}}>
        {isLoaded && item ? (
          <TickerItem key={item.symbol} symbol={item.symbol} src={item.src} />
        ) : (
          <TickerSckeleton/>
        )}
    </div>
  );
};

export default ContainerLoader;