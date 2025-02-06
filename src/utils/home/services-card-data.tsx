import {
  Service1Icon,
  Service2Icon,
  Service3Icon,
  Service4Icon,
  Service5Icon,
  Service6Icon,
} from '@/components/icons/home/home-icons';

export type ServicesCardProps = {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
};

export const servicesCardData: ServicesCardProps[] = [
  {
    title: 'Workload Automation',
    description:
      'Take an evolutionary leap beyond legacy job schedulers to centrally build, schedule and manage all IT tasks and business processes across your hybrid environment with real-time, event-based triggers.',
    link: '',
    icon: (
      <Service1Icon
        sx={{
          fontSize: 40,
        }}
      />
    ),
  },
  {
    title: 'Cloud Automation',
    description:
      'Master your hybrid IT environment. No longer are separate cloud job schedulers necessary. Centrally manage end-to-end automation across private, public, and multi-cloud landscapes.',
    link: '',
    icon: (
      <Service2Icon
        sx={{
          fontSize: 40,
        }}
      />
    ),
  },
  {
    title: 'Job Scheduling',
    description:
      'Enterprise job scheduling automates much of the backend work of a typical IT department, allowing for higher quality maintenance and therefore a better performing system.',
    link: '',
    icon: (
      <Service3Icon
        sx={{
          fontSize: 40,
        }}
      />
    ),
  },
  {
    title: 'DevOps Automation',
    description:
      'Stronger Together—Developers and IT Ops Teams Unite. Empower both with infrastructure as code, jobs as code and integration of the siloed tools used along with the CI/CD toolchain.',
    link: '',
    icon: (
      <Service4Icon
        sx={{
          fontSize: 40,
        }}
      />
    ),
  },
  {
    title: 'Data Pipeline Orchestration',
    description:
      'Centrally create and manage automated workflows that span end-to-end data pipelines. Apply DataOps methodologies, gain observability, and empower end-users with self-service access.',
    link: '',
    icon: (
      <Service5Icon
        sx={{
          fontSize: 40,
        }}
      />
    ),
  },
  {
    title: 'Managed File Transfer',
    description:
      'Control the real-time flow of your data pipeline between mainframe, distributed network, private cloud, and public cloud environments. Plus, securely manage B2B file transfer with 3rd party vendors.',
    link: '',
    icon: (
      <Service6Icon
        sx={{
          fontSize: 40,
        }}
      />
    ),
  },
];
