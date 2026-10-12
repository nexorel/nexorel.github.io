import React from 'react';
import { ServiceDetailTemplate } from '../components/ServiceDetailTemplate';
import { servicesData } from '../data/services';

export const CloudDevOps: React.FC = () => {
  const service = servicesData.find(s => s.id === 'cloud-devops')!;
  return <ServiceDetailTemplate service={service} />;
};
