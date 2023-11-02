/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'custom-green': '#1EC089',
        'custom-orange': '#FF7865',
        'custom-back':'#FAFAFA',
        'custom-gray': '#F0F0F0',
        'linear-green-2': 'var(--Linear-Green-2, #1EC089)',
        'gray-3': 'var(--Gray-3, #828282)',
        'custom-gray-2': 'var(--Grey, #6A778B)',
        'mountcolor':'#33D69F',
        'dlxcolor':'#6A778B',
        'breakcolor':'#FF7865',
        'packtextcolor':'#FF7865',
        'packplacecolor':'#6B7280',
        'bookingtext':'#6A778B',
        'bookingticket':'#FF7865',
        'backgroundColor':"#fafafa",
        'snowcolor':'#FF7865;',
        
        
      },
      
      lineHeight: {
        '135': '135%', // Add a custom line height of 135%
      },
      letterSpacing: {
        '0.24': '0.24px',
        'breakspace':'0.245px',
        '-0.99px': '-0.99px',
      },
      padding:
      {
        "22":"22px",
        "211":"211px",
        '141':'141px',
        '11.97':'11.97px',
        '29':'29px',
        '31':'31px',
        '26.97':'26.97px',
        '21':'21px',
        '19':'19px',
        '59':'59px',
        '37.14':'37.14px',
        '13':'13px',
        '65.84':'65.84px',
        '17.1':'17.1px',
        '73':'73px',
        '49.14':'49.14px',
        '26':'26px',
        '56.68':'56.68px',
        '34':'34px',
        '33':'33px',
        '46':'46px',
        '46.03':'46.03px',
        '206':'206px',
        '228.88':'228.88px',
        '17':'17px',
        '18':'18px',
        
        
      },
      margin:
      {
        '17':'17px',
        '18':'18px',
        '21':'21px',

      },
      borderRadius: {
        'sm': '0.125rem', // 2px
        'md': '0.375rem', // 6px
        'lg': '0.5rem',   // 8px
        'xl': '1rem',     // 16px
        '2xl': '2rem',    // 32px
        '36': '36px',
        'full': '9999px', // Fully rounded
        'footerborder':'36px',
        'custom': '74.556px 25px',
      },
      fontFamily: {
        'ibm-plex-sans': ['IBM Plex Sans', 'sans'],
        'montserrat': ['Montserrat', 'sans'],
        'ibmplex':['Ibm Plex Sans'],
        'poppins':['Poppins'],
        'mont': ['Montserrat', 'sans'],
        'inter': ['Inter', 'sans'],
      },
   
      fontSize: {
        xs: '12px', // Add a custom text size "xs"
        'custom-sm': '14px', // Replace 'custom-sm' with your custom size name and '14px' with the desired size
        'custom-lg': '24px', // Replace 'custom-lg' with your custom size name and '24px' with the desired size
        'mountsize' : '7px',
        'dlxsize' :'10px',
        'breaksize':'8px',
        'bookingtext':'6px',
        '22':'22px',
      },
      height: {
        '800': '800px', // Add this custom height
        'custom': '170px',
        '932':'932px',
        '15':'15px',
        '32.027':'32.027px',
        'imgheight':'38px',
        'packborderheight':'73px',
        'packimgheight':'49px',
        'bookingheight':'168px',
        'footerheight':'69px',
        'footerbookh':'37px',
        '16':'16px',
        '54':'54px',
        

      },
      lineHeight:{
        'breakheight':'9.7px'
      },
      backgroundColor:{
        'breakbgcolor':"rgba(30, 192, 137, 0.30)",
        'bookingbgcolor':'rgba(235, 239, 242, 0.60)',
        'footerbookbg':'#FF7865'
      },
      boxShadow:{
        'boxshadow':"0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        'imgshadow':'0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        'packimgshadow':'0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        'bookingshadow':'0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        'footerbookshadow':'0px 4.23529px 4.23529px 0px rgba(0, 0, 0, 0.25), 0px 4.23529px 4.23529px 0px rgba(0, 0, 0, 0.25)'
      },
      backgroundImage:{
        'packbtn':'linear-gradient(180deg, #33D69F 0%, #1EC089 100%)',
        'bookingbg':'linear-gradient(180deg, rgba(51, 214, 159, 0.80) 0%, rgba(30, 192, 137, 0.80) 100%)',
        'footerbg':'linear-gradient(180deg, #32D69F 0%, #1FC18A 100%)',
        'platinumbg':'linear-gradient(180deg, #FF7865 0%, rgba(214, 84, 69, 0.60) 100%), linear-gradient(180deg, rgba(255, 120, 101, 0.80) 0%, rgba(214, 84, 69, 0.80) 100%)',
        
       
      },
      borderColor:
      {
        'mountborder':'#33D69F',
        'packbordercolor':'#33D69F',
        'snowborder':'#FF7865'
      },
      screens: {
        'ms':'375px',
        'mob':'390px',
        'mob2':'393px',
        'mobi':'414px',
        'sm': '640px',
        'mobs':'412px',
        'sm2':'641px',
        's1':'320px',
       
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      width: {
        '360': '360px', // Add this custom width
        '375': '375px', // Add this custom width
        '400':'400px',
        '42':'42px',
        'bww':'340px',
        'imgwidth':'38px',
        'packborderwidth':'340px',
        'packimgwidth':'49px',
        'packbtnwidth':'88px',
        'bookingwidth':'340px',
        'footerwidth':'375px',
        'footerbookw':'90px',
        '63':'63px',
        '283':'283px',
      },
    },
  },
  plugins: [],
}
