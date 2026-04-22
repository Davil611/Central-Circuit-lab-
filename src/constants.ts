export const SUBJECTS = [
  { id: 'bee', title: 'Basic Electrical Engineering', icon: 'Zap', description: 'Fundamentals of current, voltage, and components.' },
  { id: 'machines', title: 'Electrical Machines', icon: 'Settings', description: 'DC/AC Motors and Alternators.' },
  { id: 'power', title: 'Power Systems', icon: 'TowerControl', description: 'Generation, Transmission, and Distribution.' },
  { id: 'network', title: 'Network Theory', icon: 'Share2', description: 'Circuit analysis and theorems.' },
  { id: 'measure', title: 'Measurements & Instrumentation', icon: 'Gauge', description: 'Sensors and measuring devices.' },
  { id: 'control', title: 'Control Systems', icon: 'Cpu', description: 'Stability and response of systems.' },
  { id: 'wiring', title: 'Wiring & Installation', icon: 'Wrench', description: 'Practical electrical installations.' },
  { id: 'electronics', title: 'Electronics Basics', icon: 'CircuitBoard', description: 'Diodes, Transistors, and ICs.' },
  { id: 'renewable', title: 'Renewable Energy', icon: 'Sun', description: 'Solar, Wind, and Hydro energy.' },
];

export const PROJECTS = [
  {
    id: 'street-light',
    subjectId: 'electronics',
    title: 'Automatic Street Light',
    objective: 'To build a circuit that automatically turns on street lights at night.',
    components: ['LDR', 'Transistor (BC547)', 'Resistor (10k)', 'LED', 'Battery'],
    workingPrinciple: 'Based on the light-dependent resistance of LDR.',
    procedure: [
      'Connect the LDR to the base of the transistor.',
      'Place the LED in series with a resistor at the collector.',
      'Power the circuit and test by covering the LDR.'
    ],
    result: 'LED turns on in dark and off in light.',
    vivaQuestions: [
      { question: 'What is LDR?', answer: 'Light Dependent Resistor whose resistance decreases with light intensity.' }
    ]
  },
  {
    id: 'dc-motor-speed',
    subjectId: 'machines',
    title: 'Speed Control of DC Motor',
    objective: 'To control the speed of a DC motor using Armature Control method.',
    components: ['DC Shunt Motor', 'Rheostat', 'Ammeter', 'Voltmeter', 'Tachometer'],
    workingPrinciple: 'Speed is inversely proportional to flux and proportional to back EMF.',
    procedure: [
      'Connect rheostat in series with the armature.',
      'Vary the rheostat and note the tachometer reading.',
      'Plot speed vs armature voltage.'
    ],
    result: 'Speed decreases as armature resistance increases.',
    vivaQuestions: [
      { question: 'What is back EMF?', answer: 'The voltage induced in the armature which opposes the applied voltage.' }
    ]
  }
];

export const SIMULATIONS = [
  { id: 'ohm-law', title: 'Ohm’s Law', type: 'circuit', description: 'Vary voltage and resistance to see current changes.' },
  { id: 'dc-motor', title: 'DC Motor Working', type: 'motor', description: 'Visualize Lorentz force and rotation.' },
  { id: 'transformer', title: 'Transformer Simulation', type: 'transformer', description: 'Primary and secondary coil interactions.' },
];
