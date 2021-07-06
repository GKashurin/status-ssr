import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
	// detect user language
	// learn more: https://github.com/i18next/i18next-browser-languageDetector
	.use(LanguageDetector)
	// pass the i18n instance to react-i18next.
	.use(initReactI18next)
	// init i18next
	// for all options read: https://www.i18next.com/overview/configuration-options
	.init({
		debug: true,
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
		resources: {
			en: {
				translation: {
					description: {
						button: 'Subscribe',
						statisticStatus: 'All Systems Operational',
						statisticTime: 'Updated a few seconds ago',
						statisticIncidents: 'Active Incidents',
						statisticMaintenances: 'Active Maintenances',
						statisticDays: 'Days Since Last Incident',
						rowTableTitle: 'Hosted Status Pages',
						rowTableDropdown: 'prompt\'s\ block',
						servicesTitle: 'External Services',
						locationsTitle: 'Locations',
						metricsTitle: 'Metrics',
						scheduledTitle: 'Scheduled Maintenance',
						scheduledVersion: 'Deploy Version 1.5.3',
						scheduledInfo: 'Planned Maintenance',
					}
				}
			},
			ru: {
				translation: {
					description: {
						button: 'Подписаться',
						statisticStatus: 'Все системы в рабочем состоянии',
						statisticTime: 'Обновлено несколько секунд назад',
						statisticIncidents: 'Активных неполадок',
						statisticMaintenances: 'Неполадки в работе',
						statisticDays: 'Дней с момента последнего происшествия',
						rowTableTitle: 'Размещенные страницы состояния',
						rowTableDropdown: 'блок с подсказкой',
						servicesTitle: 'Внешние службы',
						locationsTitle: 'Расположение',
						metricsTitle: 'Метрика',
						scheduledTitle: 'Плановое обслуживание',
						scheduledVersion: 'Развернута версия 1.5.3',
						scheduledInfo: 'Плановое обслуживание',
					}
				}
			}
		}
	});

export default i18n;
