import { MarketData } from "types";
import { ListChildComponentProps } from 'react-window';
import TickerItem from "../TickerItem/TickerItem";
import TickerSckeleton from "../TickerSckeleton/TickerSckeleton";
import { addCoin, delCoin } from '../../../slices/CoinsSlice';
import { useAppDispatch, useAppSelector } from "store/store";
import { useCallback, useEffect, useRef, useState } from "react";

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
  const dispatch = useAppDispatch();
  const selectedCoin: MarketData[] = useAppSelector((store) => store.coins);
  const [flag, setFalse] = useState(false);

  //Checking if the element already exists in the store.
  if (!item || !item.symbol) return null;
  let exist = selectedCoin.some(el => el?.symbol === item.symbol);
  const handleClick = () => {
    if(!exist){
      setFalse(exist)
      dispatch(addCoin(item));
    }
  };
 
  const deliteCoin = () => {
    dispatch(delCoin(item));
  }

  return (
    <div style={{ ...style, alignItems: 'center'}}>
        {isLoaded && item ? (
          <TickerItem 
          onClick={handleClick}
          key={item.symbol}  
          symbol={item.symbol} 
          src={item.src} 
          flag={exist}
          deliteCoin={deliteCoin}
          />
        ) : (
          <TickerSckeleton/>
        )}
    </div>
  );
};

export default ContainerLoader;