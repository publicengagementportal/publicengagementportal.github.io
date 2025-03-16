import { Building2, Users, LineChart } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">About Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Bridging the Gap Between Citizens and Stakeholders
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            The Public Engagement Portal (PEP) is an innovative platform designed to facilitate meaningful
            interaction between citizens and decision-makers through data-driven engagement.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                Our Mission
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                To empower citizens by providing a direct channel for contributing valuable data and insights
                to key stakeholders, enhancing the decision-making process in public policy and community development.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <Users className="h-6 w-6 text-white" />
                </div>
                Who We Serve
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                We connect citizens with government agencies, NGOs, and private entities, creating a
                collaborative ecosystem for data-driven community improvement and policy development.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <LineChart className="h-6 w-6 text-white" />
                </div>
                Our Impact
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Through data collection and analysis, we help transform public input into actionable insights,
                leading to more informed and responsive decision-making in our communities.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}