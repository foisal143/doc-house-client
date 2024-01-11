import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReviewCard from '../../../components/ReviewCard/ReviewCard';

const DetailsTab = ({ loaddedData }) => {
  const {
    reviews,
    businessHours,
    hospitalLocations,
    education,
    services,
    specializations,
    hospitalExperiences,
    awards,
    about,
  } = loaddedData;
  return (
    <section className="my-20">
      <div className="mx-12 p-5 bg-white">
        <Tabs>
          <TabList>
            <Tab>Overview</Tab>
            <Tab>Locations</Tab>
            <Tab>Reviews</Tab>
            <Tab>Business Hours</Tab>
          </TabList>

          <TabPanel>
            <div className="mt-5">
              <div className="space-y-5">
                <h3 className="text-3xl font-bold">About Me</h3>
                <p className="mb-5">{about}</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="space-y-5">
                  <div className="space-y-5">
                    <h3 className="text-3xl font-bold mt-5">Education</h3>
                    <div>
                      {education.map(e => (
                        <div key={e.year}>
                          <li className="font-semibold">{e.school}</li>
                          <span>{e.degree}</span> <br />
                          <span>{e.year}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-5">
                    <h3 className="text-3xl font-bold">Work Experiences</h3>
                    <div>
                      {hospitalExperiences.map(e => (
                        <div key={e.yearsOfWork}>
                          <li className="font-semibold">{e.hospitalName}</li>

                          <span>{e.yearsOfWork} years</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-5">
                    <h3 className="text-3xl font-bold">Services</h3>
                    <div>
                      {services.map(e => (
                        <li key={e} className="font-semibold">
                          {e}
                        </li>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <div>
                    <h3 className="text-3xl font-bold my-5">Aword</h3>
                    <div className="space-y-5">
                      {awards.map(award => (
                        <div key={award.name}>
                          <li className="font-bold ">{award.name}</li>
                          <p>{award.details}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold my-5">Aword</h3>
                    <div className="space-y-2">
                      {specializations.map(s => (
                        <li key={s}>{s}</li>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-5 space-y-5">
              <h4 className="text-center text-3xl my-5 font-bold">
                Our Locations
              </h4>
              {hospitalLocations.map(loc => (
                <div key={loc.hospitalName}>
                  <li className="font-bold">{loc.hospitalName}</li>
                  <p>
                    <span className="font-bold text-black">Address:</span>{' '}
                    {loc.address}
                  </p>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <h4 className="text-center text-3xl my-5 font-bold">
                Our Clients says
              </h4>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {reviews.map(review => (
                  <ReviewCard
                    review={review}
                    key={review.clientName}
                  ></ReviewCard>
                ))}
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <h4 className="text-center text-3xl my-5 font-bold">
                Our Business Hours
              </h4>
              <div className="my-5">
                <li>
                  <span className="font-bold">Monday:</span>{' '}
                  {businessHours.Monday}
                </li>
                <li>
                  <span className="font-bold">Tuesday:</span>{' '}
                  {businessHours.Tuesday}
                </li>
                <li>
                  <span className="font-bold">Wednesday:</span>{' '}
                  {businessHours.Wednesday}
                </li>
                <li>
                  <span className="font-bold">Thursday:</span>{' '}
                  {businessHours.Thursday}
                </li>
                <li>
                  <span className="font-bold">Friday:</span>{' '}
                  {businessHours.Friday}
                </li>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default DetailsTab;
