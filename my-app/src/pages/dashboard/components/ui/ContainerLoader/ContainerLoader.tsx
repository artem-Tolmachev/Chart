import { ListChildComponentProps } from 'react-window';
import TickerItem from "../TickerItem/TickerItem";
import TickerSckeleton from "../TickerSkeleton/TickerSkeleton";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "app/store/store";
import { addCoin, delCoin } from "pages/dashboard/coinData/slices/CoinsSlice";
import { MarketData } from 'pages/dashboard/types';

type ItemData = {
  items: MarketData[];
  itemStatusMap: { [index: number]: number };
  LOADED: number;
  LOADING: number;
  closeAddModal: (arg: boolean) => void;
};

const ContainerLoader = ({ data, index, style}:
  ListChildComponentProps<ItemData>
) => {
  const item = data.items[index];
  const isLoaded = data.itemStatusMap[index] === data.LOADED;
  const dispatch = useAppDispatch();
  const selectedCoin: MarketData[] = useAppSelector((store) => store.coins.coins);
  const [flag, setFalse] = useState(false);
 
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
          addCoin={handleClick}
          deliteCoin={deliteCoin}
          key={item.symbol}
          symbol={item.symbol}
          src={item.src}
          flag={exist}
          closeModal={data.closeAddModal}
        />
        ) : (
          <TickerSckeleton/>
        )}
    </div>
  );
};

export default ContainerLoader;