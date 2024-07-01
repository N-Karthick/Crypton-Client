  import React, { useEffect, useState } from 'react';
  import OrderStat from './OrderStat';
  import data from '../../Data/data-widget.json';
  import styles from './styles/WidgetOrderStats.module.scss';
  import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
  import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
  import LocalDiningRoundedIcon from '@mui/icons-material/LocalDiningRounded';
  import TakeoutDiningRoundedIcon from '@mui/icons-material/TakeoutDiningRounded';

  interface OrderStatData {
    id: number;
    title: string;
    status: string;
    value: any;
    color :string
  }

  const iconMap: { [key: string]: React.ElementType } = {
    Revenue: ArrowOutwardIcon,
    Orders: ShoppingCartRoundedIcon,
    Dine: LocalDiningRoundedIcon,
    Takeaway: TakeoutDiningRoundedIcon,
  };

  const WidgetOrderStats: React.FC = () => {
    const [stats, setStats] = useState<OrderStatData[]>([]);

    useEffect(() => {
      setStats(data.map(item => ({
        id: item.id,
        title: item.title,
        status: item.status,
        value: item.rate || item.orders,
        color : item.color
      })));
    }, []);

    return (
      <div className={styles.widgetOrderStats}>
        {stats.map(stat => {
          const Icon = iconMap[stat.title] || iconMap.Dine || iconMap.Takeout;
          return (
            <OrderStat
              key={stat.id}
              title={stat.title}
              status={stat.status}
              value={stat.value}
              icon={Icon }
              color={stat.color}
            />
          );
        })}
      </div>
    );
  };

  export default WidgetOrderStats;
