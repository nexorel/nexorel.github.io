import React from 'react';
import { ServiceDetailTemplate } from '../components/ServiceDetailTemplate';
import { servicesData } from '../data/services';

export const AutomationIntegrations: React.FC = () => {
  const service = servicesData.find(s => s.id === 'automation-integrations')!;
  return <ServiceDetailTemplate service={service} />;
};
