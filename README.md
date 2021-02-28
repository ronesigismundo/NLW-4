# API Survey

<p align="center">API Survey it is a project creating during NLW#4 by Rocketseat. This API makes it possible to perform NPS search by sending email.</p>

<hr>

## 📦 Install
```
npm install
```
```
yarn install
```
```
Create table named surveys-users in the database
```
```
create a file named .env

URL_MAIL=http://localhost:3333/answers // Survey response server URL
MYSQL_USER_NAME=root-name // Mysql user
MYSQL_PASS=password // Mysql password
```
<hr>

## Run
```
npm dev
```
```
yarn dev
```
<hr>

## Run Tests
```
npm test
```
```
yarn test
```
<hr>

## Project Structure

```
api                                              
├─ src                                           
│  ├─ controllers                                
│  │  ├─ AnswerController.ts                     
│  │  ├─ NpsController.ts                        
│  │  ├─ SendMailController.ts                   
│  │  ├─ SurveysController.ts                    
│  │  └─ UserController.ts                       
│  ├─ database                                   
│  │  ├─ migrations                              
│  │  │  ├─ 1614090245670-CreateUsers.ts         
│  │  │  ├─ 1614179713957-CreateSurveys.ts       
│  │  │  └─ 1614257973613-CreateSurveysUsers.ts  
│  │  └─ index.ts                                
│  ├─ errors                                     
│  │  └─ AppError.ts                             
│  ├─ models                                     
│  │  ├─ Survey.ts                               
│  │  ├─ SurveyUser.ts                           
│  │  └─ User.ts                                 
│  ├─ repositories                               
│  │  ├─ SurveysRepository.ts                    
│  │  ├─ SurveysUsersRepository.ts               
│  │  └─ UsersRepository.ts                      
│  ├─ services                                   
│  │  └─ SendMailServices.ts                     
│  ├─ views                                      
│  │  └─ emails                                  
│  │     └─ npsMail.hbs                          
│  ├─ __tests__                                  
│  │  ├─ Survey.test.ts                          
│  │  └─ User.test.ts                            
│  ├─ app.ts                                     
│  ├─ routers.ts                                 
│  └─ server.ts                                  
├─ jest.config.ts                                
├─ ormconfig.ts                                  
├─ package.json                                  
├─ README.md                                     
├─ tsconfig.json                                 
└─ yarn.lock                                     
                                 

```

## Roadmap

```
**POST**/users
JSON: {
          "name": "string",
          "email": "string"
          }
```
------------------------------------------------------------------------------------

```
**POST**/surveys
JSON: {
          "title": "string",
          "description": "string"
          }
```
------------------------------------------------------------------------------------

```
**GET**/surveys
return JSON: {
          "title": "string",
          "description": "string"
          }
```
------------------------------------------------------------------------------------

```
**POST**/sendMail
JSON: {
          "email": "string",
          "survey_id": "string"
          }
```
------------------------------------------------------------------------------------

## 🛠 Technology

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Typeorm](https://typeorm.io/#/)
- [Handlebars](https://handlebarsjs.com/)
- [Nodemailer](https://nodemailer.com/about/)




