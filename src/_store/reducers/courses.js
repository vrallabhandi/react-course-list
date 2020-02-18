const courseList = [
    {
        id: 1,
        name: 'Video Course 1',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with
      the release of Letraset sheets containing Lorem Ipsum passages, and
      more recently with desktop publishing software like Aldus PageMaker
      including versions of Lorem Ipsum.`,
        duration: '1h 28min',
        publishDate: '9 Nov, 2019'
    },
    {
        id: 2,
        name: 'Video Course 2',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with
      the release of Letraset sheets containing Lorem Ipsum passages, and
      more recently with desktop publishing software like Aldus PageMaker
      including versions of Lorem Ipsum.`,
        duration: '1h 56min',
        publishDate: '7 Oct, 2019'
    },
    {
        id: 3,
        name: 'Video Course 3',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with
      the release of Letraset sheets containing Lorem Ipsum passages, and
      more recently with desktop publishing software like Aldus PageMaker
      including versions of Lorem Ipsum.`,
        duration: '1h 48min',
        publishDate: '20 Aug, 2019'
    }
];

export const courses = (state = courseList, action = {}) => {
    console.log(action);
    switch (action.type) {
        case 'Get_Courses':
            return [...state]
        case 'ADD_COURSE':
            console.log('here');
            return [
                ...state,
                action
            ]
        default:
            console.log('default');
            return state
    }
}
