# Common angular components for Sunbird consumption!
Contains common UI components powered by angular. These components are designed to be used in Chat Bot platforms *(hybird mobile app, web portal, any browser based apps)* to drive reusability, maintainability hence reducing the redundant development effort significantly.

# Getting Started
For help getting started with a new Angular app, check out the Angular CLI.
For existing apps, follow these steps to begin using .

## Step 1: Install the package
    npm install @project-sunbird/common-consumption --save


## Step 3: Import the modules and components
Import the NgModule for each component you want to use:
       
    import { ChatLibModule} from '';
    
    @NgModule({
	    ...
	    
	    imports: [ChatLibModule],
	    
	    ...
    })
    export class TestAppModule { }

## Available components

|Feature| Notes| Selector|
|--|--|--|
| [Chat Window](https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents) | Chat Window for Chat Bot | lib-chat-window|
| [Chat Message List](https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents) | Chat Messages Get Listed in Widget | lib-chat-message-list|
| [Chat Message](https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents) | Library Chat Message Component |lib-chat-message|
| [Chat Message Bottom Bar](https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents) | Can be used in the course page for all consumption platforms|lib-chat-message-bottom-bar|