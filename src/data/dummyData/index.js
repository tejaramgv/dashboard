export const users = [
  { id: 1, username: 'johndoe', name: 'John Doe', email: 'john@example.com', active: true, lastActiveAt: new Date(Date.now() - 3600000) }, // 1 hour ago
  { id: 2, username: 'john', name: 'John', email: 'john@example.com', active: true, lastActiveAt: new Date(Date.now() - 1600000) }, // 45 minutes ago
  { id: 3, username: 'janedoe', name: 'Jane Doe', email: 'jane@example.com', active: false, lastActiveAt: new Date(Date.now() - 72000000) }, // 20 hours ago
  { id: 4, username: 'mikesmith', name: 'Mike Smith', email: 'mike@example.com', active: true, lastActiveAt: new Date(Date.now() - 90000000) }, // 25 hours ago
  { id: 5, username: 'susanlee', name: 'Susan Lee', email: 'susan@example.com', active: false, lastActiveAt: new Date(Date.now() - 250000000) }, // 3 days ago
  { id: 6, username: 'davidsmith', name: 'David Smith', email: 'david@example.com', active: true, lastActiveAt: new Date(Date.now() - 5000000) }, // 1.5 hours ago
  { id: 7, username: 'emilydavis', name: 'Emily Davis', email: 'emily@example.com', active: true, lastActiveAt: new Date(Date.now() - 50000000) }, // 14 hours ago
  { id: 8, username: 'alexjones', name: 'Alex Jones', email: 'alex@example.com', active: true, lastActiveAt: new Date(Date.now() - 2500000) }, // 41 minutes ago
  { id: 9, username: 'lisawilson', name: 'Lisa Wilson', email: 'lisa@example.com', active: false, lastActiveAt: new Date(Date.now() - 150000000) }, // 1.7 days ago
  { id: 10, username: 'robertbrown', name: 'Robert Brown', email: 'robert@example.com', active: true, lastActiveAt: new Date(Date.now() - 40000000) }, // 11 hours ago
  { id: 11, username: 'karenmoore', name: 'Karen Moore', email: 'karen@example.com', active: true, lastActiveAt: new Date(Date.now() - 10000000) }, // 2.8 hours ago
  { id: 12, username: 'michaelgreen', name: 'Michael Green', email: 'michael@example.com', active: false, lastActiveAt: new Date(Date.now() - 200000000) }, // 2.3 days ago
  { id: 13, username: 'sarahmiller', name: 'Sarah Miller', email: 'sarah@example.com', active: true, lastActiveAt: new Date(Date.now() - 12000000) }, // 3.3 hours ago
  { id: 14, username: 'jasonthomas', name: 'Jason Thomas', email: 'jason@example.com', active: false, lastActiveAt: new Date(Date.now() - 95000000) }, // 26 hours ago
  { id: 15, username: 'nataliewhite', name: 'Natalie White', email: 'natalie@example.com', active: true, lastActiveAt: new Date(Date.now() - 60000000) }, // 16 hours ago
  { id: 16, username: 'carlmartin', name: 'Carl Martin', email: 'carl@example.com', active: true, lastActiveAt: new Date(Date.now() - 80000000) }, // 22 hours ago
  { id: 17, username: 'lucasmorris', name: 'Lucas Morris', email: 'lucas@example.com', active: true, lastActiveAt: new Date(Date.now() - 180000000) }, // 2 days ago
  { id: 18, username: 'oliviajackson', name: 'Olivia Jackson', email: 'olivia@example.com', active: false, lastActiveAt: new Date(Date.now() - 70000000) }, // 19 hours ago
  { id: 19, username: 'ethanlee', name: 'Ethan Lee', email: 'ethan@example.com', active: true, lastActiveAt: new Date(Date.now() - 6000000) }, // 1.6 hours ago
  { id: 20, username: 'hannahhall', name: 'Hannah Hall', email: 'hannah@example.com', active: false, lastActiveAt: new Date(Date.now() - 300000000) }, // 3.5 days ago
  { id: 21, username: 'jameswalker', name: 'James Walker', email: 'james@example.com', active: true, lastActiveAt: new Date(Date.now() - 2000000) }, // 33 minutes ago
  { id: 22, username: 'maryclark', name: 'Mary Clark', email: 'mary@example.com', active: false, lastActiveAt: new Date(Date.now() - 100000000) }, // 1.2 days ago
  { id: 23, username: 'danielrodgers', name: 'Daniel Rodgers', email: 'daniel@example.com', active: true, lastActiveAt: new Date(Date.now() - 50000000) }, // 14 hours ago
  { id: 24, username: 'lilyyoung', name: 'Lily Young', email: 'lily@example.com', active: true, lastActiveAt: new Date(Date.now() - 10000000) }, // 2.8 hours ago
  { id: 25, username: 'williamlewis', name: 'William Lewis', email: 'william@example.com', active: true, lastActiveAt: new Date(Date.now() - 200000000) }, // 2.3 days ago
  { id: 26, username: 'emmascott', name: 'Emma Scott', email: 'emma@example.com', active: false, lastActiveAt: new Date(Date.now() - 500000000) }, // 5.8 days ago
  { id: 27, username: 'olivermorris', name: 'Oliver Morris', email: 'oliver@example.com', active: true, lastActiveAt: new Date(Date.now() - 25000000) }, // 7 hours ago
  { id: 28, username: 'avaadams', name: 'Ava Adams', email: 'ava@example.com', active: true, lastActiveAt: new Date(Date.now() - 80000000) }, // 22 hours ago
  { id: 29, username: 'isabellafisher', name: 'Isabella Fisher', email: 'isabella@example.com', active: false, lastActiveAt: new Date(Date.now() - 300000000) }, // 3.5 days ago
  { id: 30, username: 'benjaminwilliams', name: 'Benjamin Williams', email: 'benjamin@example.com', active: true, lastActiveAt: new Date(Date.now() - 100000000) }, // 1.2 days ago
];

export const posts = [
  { id: 1, caption: 'First Post!', mediaUrl: 'https://example.com/image1.jpg', createdAt: new Date(Date.now() - 3600000) }, // 1 hour ago
  { id: 2, caption: 'Second Post!', mediaUrl: 'https://example.com/image2.jpg', createdAt: new Date(Date.now() - 8000000) }, // 2.2 hours ago
  { id: 3, caption: 'Third Post!', mediaUrl: 'https://example.com/image3.jpg', createdAt: new Date(Date.now() - 86400000) }, // 24 hours ago
  { id: 4, caption: 'Fourth Post!', mediaUrl: 'https://example.com/image4.jpg', createdAt: new Date(Date.now() - 172800000) }, // 2 days ago
  { id: 5, caption: 'Fifth Post!', mediaUrl: 'https://example.com/image5.jpg', createdAt: new Date(Date.now() - 259200000) }, // 3 days ago
  { id: 6, caption: 'Sixth Post!', mediaUrl: 'https://example.com/image6.jpg', createdAt: new Date(Date.now() - 432000000) }, // 5 days ago
  { id: 7, caption: 'Seventh Post!', mediaUrl: 'https://example.com/image7.jpg', createdAt: new Date(Date.now() - 7200000) }, // 2 hours ago
  { id: 8, caption: 'Eighth Post!', mediaUrl: 'https://example.com/image8.jpg', createdAt: new Date(Date.now() - 36000000) }, // 10 hours ago
  { id: 9, caption: 'Ninth Post!', mediaUrl: 'https://example.com/image9.jpg', createdAt: new Date(Date.now() - 60000000) }, // 16 hours ago
  { id: 10, caption: 'Tenth Post!', mediaUrl: 'https://example.com/image10.jpg', createdAt: new Date(Date.now() - 90000000) }, // 25 hours ago
  { id: 11, caption: 'Eleventh Post!', mediaUrl: 'https://example.com/image11.jpg', createdAt: new Date(Date.now() - 110000000) }, // 30 hours ago
  { id: 12, caption: 'Twelfth Post!', mediaUrl: 'https://example.com/image12.jpg', createdAt: new Date(Date.now() - 150000000) }, // 41 hours ago
  { id: 13, caption: 'Thirteenth Post!', mediaUrl: 'https://example.com/image13.jpg', createdAt: new Date(Date.now() - 200000000) }, // 55 hours ago
  { id: 14, caption: 'Fourteenth Post!', mediaUrl: 'https://example.com/image14.jpg', createdAt: new Date(Date.now() - 240000000) }, // 6.6 days ago
  { id: 15, caption: 'Fifteenth Post!', mediaUrl: 'https://example.com/image15.jpg', createdAt: new Date(Date.now() - 270000000) }, // 7.5 days ago
  { id: 16, caption: 'Sixteenth Post!', mediaUrl: 'https://example.com/image16.jpg', createdAt: new Date(Date.now() - 300000000) }, // 8.5 days ago
  { id: 17, caption: 'Seventeenth Post!', mediaUrl: 'https://example.com/image17.jpg', createdAt: new Date(Date.now() - 340000000) }, // 9.7 days ago
  { id: 18, caption: 'Eighteenth Post!', mediaUrl: 'https://example.com/image18.jpg', createdAt: new Date(Date.now() - 370000000) }, // 10.5 days ago
  { id: 19, caption: 'Nineteenth Post!', mediaUrl: 'https://example.com/image19.jpg', createdAt: new Date(Date.now() - 400000000) }, // 11.5 days ago
  { id: 20, caption: 'Twentieth Post!', mediaUrl: 'https://example.com/image20.jpg', createdAt: new Date(Date.now() - 430000000) }, // 12.5 days ago
  { id: 21, caption: 'Twenty-First Post!', mediaUrl: 'https://example.com/image21.jpg', createdAt: new Date(Date.now() - 460000000) }, // 13.5 days ago
  { id: 22, caption: 'Twenty-Second Post!', mediaUrl: 'https://example.com/image22.jpg', createdAt: new Date(Date.now() - 490000000) }, // 14.5 days ago
  { id: 23, caption: 'Twenty-Third Post!', mediaUrl: 'https://example.com/image23.jpg', createdAt: new Date(Date.now() - 520000000) }, // 15.5 days ago
  { id: 24, caption: 'Twenty-Fourth Post!', mediaUrl: 'https://example.com/image24.jpg', createdAt: new Date(Date.now() - 550000000) }, // 16.5 days ago
  { id: 25, caption: 'Twenty-Fifth Post!', mediaUrl: 'https://example.com/image25.jpg', createdAt: new Date(Date.now() - 580000000) }, // 17.5 days ago
  { id: 26, caption: 'Twenty-Sixth Post!', mediaUrl: 'https://example.com/image26.jpg', createdAt: new Date(Date.now() - 610000000) }, // 18.5 days ago
  { id: 27, caption: 'Twenty-Seventh Post!', mediaUrl: 'https://example.com/image27.jpg', createdAt: new Date(Date.now() - 640000000) }, // 19.5 days ago
  { id: 28, caption: 'Twenty-Eighth Post!', mediaUrl: 'https://example.com/image28.jpg', createdAt: new Date(Date.now() - 670000000) }, // 20.5 days ago
  { id: 29, caption: 'Twenty-Ninth Post!', mediaUrl: 'https://example.com/image29.jpg', createdAt: new Date(Date.now() - 700000000) }, // 21.5 days ago
  { id: 30, caption: 'Thirtieth Post!', mediaUrl: 'https://example.com/image30.jpg', createdAt: new Date(Date.now() - 730000000) }, // 22.5 days ago

  { id: 31, caption: 'Eighth Post!', mediaUrl: 'https://example.com/image8.jpg', createdAt: new Date(Date.now() - 36000000) }, // 10 hours ago
  { id: 32, caption: 'Ninth Post!', mediaUrl: 'https://example.com/image9.jpg', createdAt: new Date(Date.now() - 60000000) }, // 16 hours ago
  { id: 33, caption: 'Tenth Post!', mediaUrl: 'https://example.com/image10.jpg', createdAt: new Date(Date.now() - 90000000) }, // 25 hours ago
  { id: 34, caption: 'Eleventh Post!', mediaUrl: 'https://example.com/image11.jpg', createdAt: new Date(Date.now() - 110000000) }, // 30 hours ago
  { id: 35, caption: 'Twelfth Post!', mediaUrl: 'https://example.com/image12.jpg', createdAt: new Date(Date.now() - 150000000) }, // 41 hours ago
  { id: 36, caption: 'Thirteenth Post!', mediaUrl: 'https://example.com/image13.jpg', createdAt: new Date(Date.now() - 200000000) }, // 55 hours ago
  { id: 37, caption: 'Fourteenth Post!', mediaUrl: 'https://example.com/image14.jpg', createdAt: new Date(Date.now() - 240000000) }, // 6.6 days ago
  { id: 38, caption: 'Fifteenth Post!', mediaUrl: 'https://example.com/image15.jpg', createdAt: new Date(Date.now() - 270000000) }, // 7.5 days ago
  { id: 39, caption: 'Sixteenth Post!', mediaUrl: 'https://example.com/image16.jpg', createdAt: new Date(Date.now() - 300000000) }, // 8.5 days ago
  { id: 40, caption: 'Seventeenth Post!', mediaUrl: 'https://example.com/image17.jpg', createdAt: new Date(Date.now() - 340000000) }, // 9.7 days ago
 
];
