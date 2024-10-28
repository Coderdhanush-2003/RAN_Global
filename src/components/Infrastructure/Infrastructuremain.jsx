import React from 'react';
import './InfrastructureCards.scss';
import { Tooltip } from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faWeightHanging, 
  faCogs, 
  faRulerCombined, 
  faUsers, 
  faDesktop, 
  faBolt 
} from '@fortawesome/free-solid-svg-icons';

const InfrastructureOverview = () => {
  const assets = [
    {
      title: 'Machinery Assets',
      details: [
        'Lathe (4Ft) - 2 Nos',
        'Drilling M/c - 3 Nos',
        'Bench Grinder - 1 No',
        'Surface Grinder - 1 No',
        'Vibro Barrelling - 1 No',
        'Projection Welding CD Type (10Kv) - 1 No',
        'Projection Welding AC Type (75Kva) - 1 No',
        'Tapping M/c (M10–M18) - 2 Nos',
        'Chamfering M/cs - 3 Nos'
      ],
      quantity: '10 Nos',
      icon: faCogs,
      color: '#4A628A',
      large: true,
      isList: true
    },
    {
      title: 'Power Presses',
      details: 'Capacity: 25T to 150T',
      quantity: '16 Nos',
      icon: faWeightHanging,
      color: '#4A628A'
    },
    {
      title: 'Instrument Assets',
      details: [
        'Micrometre',
        'Vernier',
        'Height Gauge',
        'Dial Gauge'
      ],
      quantity: 'All Digital Measuring Systems',
      icon: faRulerCombined,
      color: '#4A628A',
      isList: true
    },
    {
      title: 'Human Assets',
      details: 'Permanent: 30, Contract: 20',
      quantity: 'Total: 50 People',
      icon: faUsers,
      color: '#4A628A'
    },
    {
      title: 'Design Software',
      details: 'Tool Design 3D Software: CATIA V5 R10',
      quantity: '1 User License',
      icon: faDesktop,
      color: '#4A628A'
    },
    {
      title: 'Power',
      details: 'Power capacity for equipment operation',
      quantity: '150 HP',
      icon: faBolt,
      color: '#4A628A'
    }
  ];

  return (
    <div className="infrastructure-overview container">
      <h2>Infrastructure Overview</h2>
      <div className="card-grid">
        {assets.map((asset, index) => (
          <div
            key={index}
            className={`info-card ${asset.large ? 'large-card' : ''}`}
            style={{ borderColor: asset.color }}
            data-tooltip={Array.isArray(asset.details) ? asset.details.join(', ') : asset.details}
            data-tooltip-id={`tooltip-${index}`}
          >
            <Tooltip id={`tooltip-${index}`} place="top" effect="solid" />
            <div className="card-header">
              <FontAwesomeIcon icon={asset.icon} size="2x" style={{ color: asset.color }} />
            </div>
            <div className="card-body">
              <h5>{asset.title}</h5>
              {asset.isList ? (
                <ol>
                  {asset.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ol>
              ) : (
                <p>{asset.details}</p>
              )}
              <div className="quantity">{asset.quantity}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfrastructureOverview;
