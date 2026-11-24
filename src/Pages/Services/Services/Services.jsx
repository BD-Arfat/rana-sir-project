import React from 'react';
import ServicesHero from './ServicesHero';
import OurServices from './OurServices';
import VisualInspectionLoadTest from './VisualInspectionLoadTest';
import NDTTest from './NDTTest';
import PressureTest from './PressureTest';
import ElectricalTestSection from './ElectricalTestSection';
import HeavyEquipmentMaintenance from './HeavyEquipmentMaintenance';
import FFALSFSection from './FFALSFSection';

const Services = () => {
    return (
        <div>
            <ServicesHero/>
            <OurServices/>
            <VisualInspectionLoadTest/>
            <NDTTest/>
            <PressureTest/>
            <ElectricalTestSection/>
            <HeavyEquipmentMaintenance/>
            <FFALSFSection/>
        </div>
    );
};

export default Services;