import React from 'react';
import { ServiceDetailTemplate } from '../components/ServiceDetailTemplate';
import { servicesData } from '../data/services';

export const SoftwareEngineering: React.FC = () => {
  const service = servicesData.find(s => s.id === 'software-engineering')!;
  return <ServiceDetailTemplate service={service} />;
};
