export const initialState = {
  product: {
    data: [
      {
        id: '1',
        author: 'Neo',
        created: '17.07.2009',
        updated: '03.05.2012',
        status: 'published',
        title: 'Mona Lisa',
        text: 'This message is made by initialState.js component, and render fine. So Im happy',
        photo: 'https://images.unsplash.com/photo-1619958405105-46316fdc0616?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80',
        price: 200,
        phone: '234324543',
        addres: '11 listopada street',
        email: 'neo@example.com',
        category: 'painting'
      },
      {
        id: '1',
        author: 'Trinity',
        created: '17.07.2009',
        updated: '03.05.2012',
        status: 'published',
        title: 'Figure',
        text: 'This message is made by initialState.js component, and render fine. So Im happy',
        photo: 'https://images.unsplash.com/photo-1619958405105-46316fdc0616?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80',
        price: 200,
        phone: '234324543',
        addres: '11 listopada street',
        email: 'neo@example.com',
        category: 'craft'
      },
    ],
    loading: {
      active: false,
      error: false,
    },
    singlePost: {},
  },
};
