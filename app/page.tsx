import {
  Hero,
  Clients,
  SetupConference,
  MainFeature,
  OtherFeatures,
  MainBenefit,
  Quotes,
  CreateConference,
  SVGs,
} from '@/modules/home/components';
import * as data from '@/modules/data';
import Main from '@/shared/components/layouts/main';
import Container from '@/shared/components/layouts/container';
import Image from '@/shared/components/ui/image';
import Button from '@/shared/components/ui/button';
import Icon from '@/shared/components/ui/icon';
import ArrowRight from '@/shared/components/ui/svgs/arrow-right';
import * as path from '@/shared/utils/pathnames';

export default function Home() {
  return (
    <Main>
      <Hero.Root>
        <Container>
          <Hero.Content>
            <Hero.ImageContent>
              <Image
                priority
                alt={data.images.header.name}
                width={data.images.header.width}
                height={data.images.header.height}
                src={path.image(data.images.header.name)}
                sizes={[327, 522]}
              />
            </Hero.ImageContent>
            <Hero.TextContent>
              <Hero.Title>
                Reliable,&nbsp;
                <span className="inline-flex">
                  secure
                  <SVGs.HeroTitle className="w-6 h-6 lg:w-8 lg:h-8" />
                </span>
                conference to get the best events
              </Hero.Title>
              <Hero.Description>
                Hold incredible events, share knowledge, build and grow your product, create
                opportunity
              </Hero.Description>
              <Hero.Actions>
                <Button type="button" size="lg">
                  Create Conference
                </Button>
                <Button type="button" variant="outlined" size="lg" className="border-current">
                  Watch story
                  <Icon element={<ArrowRight />} className="ml-2" />
                </Button>
              </Hero.Actions>
            </Hero.TextContent>
          </Hero.Content>
        </Container>
      </Hero.Root>

      <Clients.Root>
        <Container>
          <Clients.Content>
            <Clients.Title>Clients</Clients.Title>
            <Clients.List>
              {data.images.clients.map(({ name, image }) => (
                <Clients.Item key={name}>
                  <Image
                    alt={name}
                    width={image.width}
                    height={image.height}
                    src={path.image(image.name)}
                  />
                </Clients.Item>
              ))}
            </Clients.List>
          </Clients.Content>
        </Container>
      </Clients.Root>

      <SetupConference.Root>
        <Container>
          <SetupConference.Content>
            <SetupConference.ImageContent>
              <Image
                alt={data.images.setup_conference.name}
                width={data.images.setup_conference.width}
                height={data.images.setup_conference.height}
                src={path.image(data.images.setup_conference.name)}
                sizes={[327, 522]}
              />
            </SetupConference.ImageContent>
            <SetupConference.TextContent>
              <div className="lg:-ml-10">
                <SetupConference.Title>Everyone on their own device.</SetupConference.Title>
                <SetupConference.Description>
                  <strong>EventUp</strong> is designed to be inclusive, by being able to use your
                  own device to help hybrid-conference teams create, collaborate and celebrate
                  together.
                </SetupConference.Description>
              </div>
            </SetupConference.TextContent>
          </SetupConference.Content>
        </Container>
      </SetupConference.Root>

      <MainFeature.Root>
        <Container>
          <MainFeature.Content>
            <MainFeature.ImageContent>
              <Image
                alt={data.images.main_feature.name}
                width={data.images.main_feature.width}
                height={data.images.main_feature.height}
                src={path.image(data.images.main_feature.name)}
                sizes={[327, 1063]}
              />
            </MainFeature.ImageContent>
            <MainFeature.TextContent>
              <MainFeature.Title>Powerful virtual conferencing platform solution</MainFeature.Title>
              <MainFeature.Description>
                Dedicated spaces that make it easy to come together.
              </MainFeature.Description>
            </MainFeature.TextContent>
          </MainFeature.Content>
        </Container>
      </MainFeature.Root>

      <OtherFeatures.Root className="lg:relative lg:z-10">
        <SVGs.OtherFeatures className="absolute top-0 left-0 -z-10 hidden w-full h-full lg:block" />
        <Container className="overflow-x-hidden">
          <OtherFeatures.Content>
            <OtherFeatures.ImageContent>
              <Image
                alt={data.images.other_features.name}
                width={data.images.other_features.width}
                height={data.images.other_features.height}
                src={path.image(data.images.other_features.name)}
                sizes={[327, 637]}
                className="lg:-ml-5 lg:max-w-[637px]"
              />
            </OtherFeatures.ImageContent>
            <OtherFeatures.TextContent>
              <OtherFeatures.Header>
                <OtherFeatures.Title>ALL FEATURES</OtherFeatures.Title>
                <OtherFeatures.SubTitle>
                  Video calls loved by extraordinary teams.
                </OtherFeatures.SubTitle>
                <OtherFeatures.SubDescription>
                  Making hybrid-conference inclusive with unique audio technology.
                </OtherFeatures.SubDescription>
              </OtherFeatures.Header>
              <OtherFeatures.ListGroup>
                {data.features.map((contents, i) => (
                  <OtherFeatures.List key={i}>
                    {contents.map((content) => (
                      <OtherFeatures.Item key={content}>{content}</OtherFeatures.Item>
                    ))}
                  </OtherFeatures.List>
                ))}
              </OtherFeatures.ListGroup>
            </OtherFeatures.TextContent>
          </OtherFeatures.Content>
        </Container>
      </OtherFeatures.Root>

      <MainBenefit.Root className="lg:relative lg:z-10">
        <SVGs.MainBenefit className="absolute top-0 left-0 -z-10 hidden w-full h-full lg:block" />
        <Container>
          <MainBenefit.Content>
            <MainBenefit.ImageContent>
              <Image
                alt={data.images.main_benefit.name}
                width={data.images.main_benefit.width}
                height={data.images.main_benefit.height}
                src={path.image(data.images.main_benefit.name)}
                sizes={[327, 630]}
              />
            </MainBenefit.ImageContent>
            <MainBenefit.TextContent>
              <div className="lg:-ml-5">
                <MainBenefit.Header>
                  <MainBenefit.Title>BENEFITS OF YOU</MainBenefit.Title>
                  <MainBenefit.SubTitle>
                    Fast, reliable and secure for your conferences
                  </MainBenefit.SubTitle>
                  <MainBenefit.SubDescription>
                    By using us, get the benefits that make it easier for you in the conference for
                    your convenience and the participants
                  </MainBenefit.SubDescription>
                </MainBenefit.Header>
                <MainBenefit.ListGroup>
                  {data.benefits.map((contents, i) => (
                    <MainBenefit.List key={i}>
                      {contents.map((content) => (
                        <MainBenefit.Item key={content}>{content}</MainBenefit.Item>
                      ))}
                    </MainBenefit.List>
                  ))}
                </MainBenefit.ListGroup>
              </div>
            </MainBenefit.TextContent>
          </MainBenefit.Content>
        </Container>
      </MainBenefit.Root>

      <Quotes.Root>
        <Container>
          <Quotes.Content>
            <Quotes.Profile.Root>
              <Quotes.Profile.Avatar asChild>
                <Image
                  alt={data.quote.user.image.name}
                  width={data.quote.user.image.width}
                  height={data.quote.user.image.height}
                  src={path.image(data.quote.user.image.name)}
                />
              </Quotes.Profile.Avatar>
              <Quotes.Profile.Content>
                <Quotes.Profile.DisplayName>{data.quote.user.name}</Quotes.Profile.DisplayName>
                <Quotes.Profile.Description>
                  {data.quote.user.description}
                </Quotes.Profile.Description>
              </Quotes.Profile.Content>
            </Quotes.Profile.Root>
            <Quotes.Blockquote>{data.quote.content}</Quotes.Blockquote>
          </Quotes.Content>
        </Container>
      </Quotes.Root>

      <CreateConference.Root>
        <Container>
          <CreateConference.Content className="relative z-10">
            <SVGs.CreateConference.Mobile className="absolute top-0 left-0 -z-10 w-full h-full lg:hidden" />
            <SVGs.CreateConference.Desktop className="absolute top-0 left-0 -z-10 hidden w-full h-full lg:block" />
            <CreateConference.Header>
              <CreateConference.Title>Ready to setup your next conference?</CreateConference.Title>
              <CreateConference.Description>
                Build opportunities for future opportunities for products, startups.
              </CreateConference.Description>
            </CreateConference.Header>
            <CreateConference.Actions>
              <Button type="button" size="lg">
                Create Conference
              </Button>
              <Button type="button" variant="outlined" size="lg" className="border-current">
                watch story
              </Button>
            </CreateConference.Actions>
          </CreateConference.Content>
        </Container>
      </CreateConference.Root>
    </Main>
  );
}
