
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import ServicesHero from './ServicesHero';
import OurServices from './OurServices';
import VisualInspectionLoadTest from './VisualInspectionLoadTest';
import NDTTest from './NDTTest';
import PressureTest from './PressureTest';
import ElectricalTestSection from './ElectricalTestSection';
import HeavyEquipmentMaintenance from './HeavyEquipmentMaintenance';
import FFALSFSection from './FFALSFSection';
import RiggerTraining from './RiggerTraining';
import LSASection from './LSASection';

const Services = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const sectionId = location.hash.substring(1);

            const timer = setTimeout(() => {
                const section = document.getElementById(sectionId);

                if (section) {
                    section.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            }, 400);

            return () => clearTimeout(timer);
        }
    }, [location]);

    return (
        <div>
            <ServicesHero />
            <OurServices />
            <VisualInspectionLoadTest />
            <NDTTest />
            <PressureTest />
            <ElectricalTestSection />
            <HeavyEquipmentMaintenance />
            {/* <RiggerTraining/> */}
            <FFALSFSection />
            <LSASection/>
        </div>
    );
};

export default Services;
