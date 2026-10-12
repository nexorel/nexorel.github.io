import React from 'react';
import { ServiceDetailTemplate } from '../components/ServiceDetailTemplate';
import { servicesData } from '../data/services';

export const UiUx: React.FC = () => {
  const service = servicesData.find(s => s.id === 'ui-ux')!;
  return <ServiceDetailTemplate service={service} />;
};
