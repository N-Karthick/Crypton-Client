import React from 'react';
import { Card, Typography, Box } from '@mui/material';
import styles from './styles/OrderStat.module.scss';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

interface OrderStatProps {
  title: string;
  status: string;
  value: string | number;
  icon: React.ElementType;
  color: string;
}

const OrderStat: React.FC<OrderStatProps> = ({ title, status, value, icon: Icon,color }) => {
  const isPositive = parseFloat(status) > 0;

  const formatStatus = (status: string) => {
    return status.replace(/[+-]/, '');
  };

  return (
    <Card className={styles.orderStat} sx={{ borderRadius: '30px', padding: '20px' }}>
      <Typography sx={{ fontSize: '1.9rem', fontWeight: 700 }} component="div" className={styles.title}>
        {title}
      </Typography>
      <Typography sx={{ fontSize: '2rem', fontWeight: 700, display: 'flex', alignItems: 'center' }} variant="h6" component="div" className={styles.value}>
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', position:"relative",
            left:"3%",
            width: '40px', 
            height: '40px', 
            borderRadius: '50%', 
            backgroundColor: color, 
            color: 'white', 
            marginRight: '10px' 
          }}
        >
          <Icon />
        </Box>
        {value}
      </Typography>
      <Typography
        sx={{ fontSize: '1.2rem' }}
        variant="body2"
        className={`${styles.status} ${isPositive ? styles.positive : styles.negative}`}
      >
        {isPositive ? <ArrowUpwardIcon sx={{ color: 'green', margin: '-5px 0px' }} /> : <ArrowDownwardIcon sx={{ color: 'red', margin: '-5px 0px' }} />}
        {formatStatus(status)}
      </Typography>
    </Card>
  );
};

export default OrderStat;
