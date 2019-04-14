import { Sponsor, SponsorType } from './types'

interface From2018 {
  YouTubePlaylistUrl: string
  YouTubeKeynoteEmbedUrl: string
  FlickrAlbumUrl: string
  Sponsors: Sponsor[]
}

const From2018: From2018 = {
  YouTubePlaylistUrl: null, // TODO
  // tslint:disable-next-line:object-literal-sort-keys
  YouTubeKeynoteEmbedUrl: null, // TODO
  FlickrAlbumUrl: null, // TODO
  Sponsors: [
    // Platinum
    {
      imageUrl: '/static/images/sponsors/2018/liberty.png',
      name: 'Liberty',
      type: SponsorType.Platinum,
      url: 'https://www.liberty.com.au/',
    },
    // Gold
    {
      imageUrl: '/static/images/sponsors/2018/compass.png',
      name: 'Compass',
      type: SponsorType.Gold,
      url: 'https://www.compass.education/',
    },
    {
      imageUrl: '/static/images/sponsors/2018/kiandrait.png',
      name: 'Kiandra It',
      type: SponsorType.Gold,
      url: 'https://kiandra.com.au/',
    },
    {
      imageUrl: '/static/images/sponsors/2018/livehire.png',
      name: 'LiveHire',
      type: SponsorType.Gold,
      url: 'https://www.livehire.com/',
    },
    {
      imageUrl: '/static/images/sponsors/2018/microsoft.png',
      name: 'Microsoft',
      type: SponsorType.Gold,
      url: 'https://www.microsoft.com/',
    },
    {
      imageUrl: '/static/images/sponsors/2018/nintex.png',
      name: 'Nintex',
      type: SponsorType.Gold,
      url: 'https://www.nintex.com/',
    },
    {
      imageUrl: '/static/images/sponsors/2018/readify.png',
      name: 'Readify',
      type: SponsorType.Gold,
      url: 'https://readify.net/',
    },
    {
      imageUrl: '/static/images/sponsors/2018/square.png',
      name: 'Square',
      type: SponsorType.Gold,
      url: 'https://squareup.com/au',
    },
    {
      imageUrl: '/static/images/sponsors/2018/starrez.png',
      name: 'StarRez',
      type: SponsorType.Gold,
      url: 'https://www.starrez.com/',
    },
    {
      imageUrl: '/static/images/sponsors/2018/twilio.png',
      name: 'Twilio',
      type: SponsorType.Gold,
      url: 'https://www.twilio.com/',
    },
    // Silver
    {
      imageUrl: '/static/images/sponsors/2018/ndc-sydney.png',
      name: 'NDC Sydney',
      type: SponsorType.Silver,
      url: 'http://ndcsydney.com/',
    },
    {
      imageUrl: '/static/images/sponsors/2018/telerik.png',
      name: 'Progress Telerik',
      type: SponsorType.Silver,
      url: 'https://www.progress.com/',
    },
    // Community
    {
      imageUrl: '/static/images/sponsors/2018/ddd-brisbane.png',
      name: 'DDD Brisbane',
      type: SponsorType.Community,
      url: 'https://dddbrisbane.com/',
    },
    {
      imageUrl: '/static/images/sponsors/2018/ddd-sydney.png',
      name: 'DDD Sydney',
      type: SponsorType.Community,
      url: 'http://next.dddsydney.com.au/',
    },
    {
      imageUrl: '/static/images/sponsors/2018/ddd-perth.png',
      name: 'DDD Perth',
      type: SponsorType.Community,
      url: 'https://dddperth.com',
    },
    {
      imageUrl: '/static/images/sponsors/2018/GGDMelb.png',
      name: 'Girl Geek Dinners Melbourne',
      type: SponsorType.Community,
      url: 'https://www.meetup.com/en-AU/Girl-Geek-Dinners-Melbourne/',
    },
    {
      imageUrl: '/static/images/sponsors/2018/juniordev.png',
      name: 'JuniorDev',
      type: SponsorType.Community,
      url: 'https://juniordev.io/',
    },
    // Services
    {
      imageUrl: '/static/images/sponsors/2018/flexrule.png',
      name: 'FlexRule',
      serviceProvided: 'WiFi powered',
      type: SponsorType.Service,
      url: 'http://www.flexrule.com',
    },
    {
      imageUrl: '/static/images/sponsors/2018/mexia.png',
      name: 'Mexia',
      serviceProvided: 'Childcare supported',
      type: SponsorType.Service,
      url: 'https://www.mexia.com.au',
    },
    {
      imageUrl: '/static/images/sponsors/2018/devexpress.png',
      name: 'DevExpress',
      serviceProvided: 'Developer Recharge (Coffee)',
      type: SponsorType.Service,
      url: 'https://www.devexpress.com',
    },
  ],
}

export default From2018
