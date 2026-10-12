import React from 'react';
import { ServiceDetailTemplate } from '../components/ServiceDetailTemplate';
import { servicesData } from '../data/services';

export const SecurityDevSecOps: React.FC = () => {
  const service = servicesData.find(s => s.id === 'security-devsecops')!;
  return <ServiceDetailTemplate service={service} />;
};
