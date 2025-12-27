'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ReactCountryFlag from 'react-country-flag'
import { useLanguage } from '@/components/LanguageProvider'

const englishContent = {
  title: 'Patient Bill of Rights',
  welcome: 'Welcome to Dr. Marius Calin\'s Office. We are committed to providing every patient with the highest level of care, respect, and support. To ensure a positive and transparent experience, we have established the following Patient Bill of Rights, in accordance with New Jersey state regulations.',
  sections: [
    {
      number: '1',
      title: 'Respectful and Considerate Care',
      content: [
        'You have the right to be treated with dignity, respect, and compassion, regardless of race, age, religion, national origin, sex, sexual orientation, gender identity or expression, disability, diagnosis, ability to pay, or source of payment.',
        'Your personal values, beliefs, and preferences will be honored as long as they do not interfere with the quality of care provided.'
      ]
    },
    {
      number: '2',
      title: 'Access to Care',
      content: [
        'You have the right to receive necessary medical care and attention in a timely manner.',
        'If you have urgent needs, our team will prioritize your care and guide you appropriately.'
      ]
    },
    {
      number: '3',
      title: 'Privacy and Confidentiality',
      content: [
        'Your personal health information will be kept confidential in accordance with HIPAA regulations and New Jersey state laws.',
        'You have the right to access your medical records and request corrections if errors are identified.'
      ]
    },
    {
      number: '4',
      title: 'Informed Consent and Decision-Making',
      content: [
        'You have the right to be fully informed about your medical condition, recommended treatment, risks involved, expected results, and reasonable medical alternatives.',
        'You are entitled to participate in decisions regarding your care and to provide or withhold consent for treatments.'
      ]
    },
    {
      number: '5',
      title: 'Clear Communication',
      content: [
        'You have the right to clear and open communication with your healthcare providers.',
        'If you do not understand your diagnosis or treatment, you can ask for clarification at any time.',
        'If needed, you have the right to receive translation or interpretation services to fully understand your care.'
      ]
    },
    {
      number: '6',
      title: 'Second Opinions',
      content: [
        'You have the right to seek a second opinion regarding any diagnosis, treatment, or procedure.'
      ]
    },
    {
      number: '7',
      title: 'Pain Management',
      content: [
        'You have the right to appropriate pain assessment and management as part of your care plan.'
      ]
    },
    {
      number: '8',
      title: 'Financial Transparency',
      content: [
        'You are entitled to receive clear information about the cost of treatments, billing procedures, and payment options.',
        'If your treatment involves out-of-network services, we will provide guidance on expected costs and reimbursement processes.',
        'Upon request, you have the right to receive an itemized bill and an explanation of the charges.'
      ]
    },
    {
      number: '9',
      title: 'Safe and Comfortable Environment',
      content: [
        'You have the right to receive care in a safe and supportive environment.',
        'Any concerns regarding safety or quality of care should be promptly brought to the attention of our team.'
      ]
    },
    {
      number: '10',
      title: 'Complaints and Feedback',
      content: [
        'You have the right to voice complaints, concerns, or suggestions without fear of retaliation.',
        'We are committed to addressing any issues in a prompt and respectful manner to improve the patient experience.',
        'You have the right to present grievances to the designated staff member and to receive a response within a reasonable period.'
      ]
    },
    {
      number: '11',
      title: 'Continuity of Care',
      content: [
        'You have the right to continuity of care and to be informed about follow-up plans and necessary future treatments.'
      ]
    },
    {
      number: '12',
      title: 'Cultural and Language Support',
      content: [
        'If needed, you have the right to receive translation or interpretation services to fully understand your care.'
      ]
    },
    {
      number: '13',
      title: 'Freedom from Abuse and Restraints',
      content: [
        'You have the right to be free from physical and mental abuse.',
        'You have the right to be free from restraints unless they are authorized by a physician for a limited period to protect you or others from injury.'
      ]
    },
    {
      number: '14',
      title: 'Participation in Experimental Research',
      content: [
        'You have the right to be included in experimental research only when you give informed, written consent to such participation.',
        'You may refuse to participate in experimental research, including the investigation of new drugs and medical devices.'
      ]
    },
    {
      number: '15',
      title: 'Facility Rules and Regulations',
      content: [
        'You have the right to be informed of the facility\'s rules and regulations that apply to your conduct as a patient.'
      ]
    }
  ],
  closing: 'Our goal is to provide exceptional care tailored to your individual needs while ensuring your rights as a patient are respected. If you have any questions or concerns about this Patient Bill of Rights, please do not hesitate to reach out to our office staff.',
  legal: 'This Patient Bill of Rights is in accordance with New Jersey Administrative Code § 8:43A-16.2.'
}

const spanishContent = {
  title: 'Declaración de Derechos del Paciente',
  welcome: 'Bienvenido a la oficina del Dr. Marius Calin. Estamos comprometidos a proporcionar a cada paciente el más alto nivel de atención, respeto y apoyo. Para garantizar una experiencia positiva y transparente, hemos establecido la siguiente Declaración de Derechos del Paciente, de acuerdo con las regulaciones del estado de Nueva Jersey.',
  sections: [
    {
      number: '1',
      title: 'Atención Respetuosa y Considerada',
      content: [
        'Tiene derecho a ser tratado con dignidad, respeto y compasión, sin importar su raza, edad, religión, origen nacional, sexo, orientación sexual, identidad o expresión de género, discapacidad, diagnóstico, capacidad de pago o fuente de pago.',
        'Sus valores personales, creencias y preferencias serán respetados siempre que no interfieran con la calidad de la atención brindada.'
      ]
    },
    {
      number: '2',
      title: 'Acceso a la Atención',
      content: [
        'Tiene derecho a recibir la atención médica necesaria y oportuna.',
        'Si tiene necesidades urgentes, nuestro equipo priorizará su atención y lo guiará adecuadamente.'
      ]
    },
    {
      number: '3',
      title: 'Privacidad y Confidencialidad',
      content: [
        'Su información médica personal se mantendrá confidencial de acuerdo con las regulaciones de HIPAA y las leyes del estado de Nueva Jersey.',
        'Tiene derecho a acceder a sus registros médicos y solicitar correcciones si se identifican errores.'
      ]
    },
    {
      number: '4',
      title: 'Consentimiento Informado y Toma de Decisiones',
      content: [
        'Tiene derecho a ser plenamente informado sobre su condición médica, el tratamiento recomendado, los riesgos involucrados, los resultados esperados y las alternativas médicas razonables.',
        'Tiene derecho a participar en las decisiones relacionadas con su atención y a dar o retirar su consentimiento para los tratamientos.'
      ]
    },
    {
      number: '5',
      title: 'Comunicación Clara',
      content: [
        'Tiene derecho a una comunicación clara y abierta con sus proveedores de atención médica.',
        'Si no entiende su diagnóstico o tratamiento, puede pedir aclaraciones en cualquier momento.',
        'Si lo necesita, tiene derecho a recibir servicios de traducción o interpretación para comprender completamente su atención.'
      ]
    },
    {
      number: '6',
      title: 'Segundas Opiniones',
      content: [
        'Tiene derecho a solicitar una segunda opinión sobre cualquier diagnóstico, tratamiento o procedimiento.'
      ]
    },
    {
      number: '7',
      title: 'Manejo del Dolor',
      content: [
        'Tiene derecho a una evaluación y manejo adecuado del dolor como parte de su plan de atención.'
      ]
    },
    {
      number: '8',
      title: 'Transparencia Financiera',
      content: [
        'Tiene derecho a recibir información clara sobre el costo de los tratamientos, los procedimientos de facturación y las opciones de pago.',
        'Si su tratamiento involucra servicios fuera de la red, le proporcionaremos orientación sobre los costos esperados y los procesos de reembolso.',
        'A solicitud, tiene derecho a recibir una factura detallada y una explicación de los cargos.'
      ]
    },
    {
      number: '9',
      title: 'Entorno Seguro y Cómodo',
      content: [
        'Tiene derecho a recibir atención en un entorno seguro y de apoyo.',
        'Cualquier preocupación sobre la seguridad o la calidad de la atención debe ser informada de inmediato a nuestro equipo.'
      ]
    },
    {
      number: '10',
      title: 'Quejas y Retroalimentación',
      content: [
        'Tiene derecho a expresar quejas, preocupaciones o sugerencias sin temor a represalias.',
        'Nos comprometemos a abordar cualquier problema de manera oportuna y respetuosa para mejorar la experiencia del paciente.',
        'Tiene derecho a presentar quejas al miembro del personal designado y a recibir una respuesta dentro de un período razonable.'
      ]
    },
    {
      number: '11',
      title: 'Continuidad de la Atención',
      content: [
        'Tiene derecho a la continuidad de la atención y a ser informado sobre los planes de seguimiento y los tratamientos futuros necesarios.'
      ]
    },
    {
      number: '12',
      title: 'Apoyo Cultural y Lingüístico',
      content: [
        'Si lo necesita, tiene derecho a recibir servicios de traducción o interpretación para comprender completamente su atención.'
      ]
    },
    {
      number: '13',
      title: 'Libertad de Abusos y Restricciones',
      content: [
        'Tiene derecho a estar libre de abusos físicos y mentales.',
        'Tiene derecho a estar libre de restricciones, a menos que sean autorizadas por un médico por un período limitado para protegerlo a usted o a otros de lesiones.'
      ]
    },
    {
      number: '14',
      title: 'Participación en Investigaciones Experimentales',
      content: [
        'Tiene derecho a participar en investigaciones experimentales solo cuando dé su consentimiento informado y por escrito para dicha participación.',
        'Puede negarse a participar en investigaciones experimentales, incluyendo la investigación de nuevos medicamentos y dispositivos médicos.'
      ]
    },
    {
      number: '15',
      title: 'Normas y Reglamentos de la Instalación',
      content: [
        'Tiene derecho a ser informado sobre las normas y reglamentos de la instalación que se aplican a su conducta como paciente.'
      ]
    }
  ],
  closing: 'Nuestro objetivo es brindar una atención excepcional adaptada a sus necesidades individuales, asegurando al mismo tiempo que se respeten sus derechos como paciente. Si tiene alguna pregunta o inquietud sobre esta Declaración de Derechos del Paciente, no dude en comunicarse con nuestro personal de la oficina.',
  legal: 'Esta Declaración de Derechos del Paciente está en conformidad con el Código Administrativo de Nueva Jersey § 8:43A-16.2.'
}

export default function PatientBillOfRights() {
  const { language, setLanguage } = useLanguage()
  const content = language === 'es' ? spanishContent : englishContent

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 text-center">
              {content.title}
            </h1>
            
            {/* Language Toggle */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => setLanguage('en')}
                className={`p-2 rounded-md transition-colors ${
                  language === 'en'
                    ? 'bg-primary/20 text-primary'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                aria-label="Switch to English"
                title="English"
              >
                <ReactCountryFlag
                  countryCode="GB"
                  svg
                  style={{
                    width: '1.5rem',
                    height: '1.5rem',
                  }}
                />
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`p-2 rounded-md transition-colors ${
                  language === 'es'
                    ? 'bg-primary/20 text-primary'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                aria-label="Switch to Spanish"
                title="Español"
              >
                <ReactCountryFlag
                  countryCode="ES"
                  svg
                  style={{
                    width: '1.5rem',
                    height: '1.5rem',
                  }}
                />
              </button>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12 border border-gray-200 dark:border-gray-700">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                {content.welcome}
              </p>
              
              {content.sections.map((section, index) => (
                <div key={index} className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    {section.number}. {section.title}
                  </h2>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    {section.content.map((paragraph, pIndex) => (
                      <li key={pIndex} className="leading-relaxed">
                        {paragraph}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 mt-8">
                {content.closing}
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm italic mt-6">
                {content.legal}
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

