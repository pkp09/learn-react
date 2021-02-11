import React, { Component } from 'react';
import './App.css';
import FirstTest from './FirstTest'

import SecondComponent from './Components/SecondComponent'
import FirstComponent from './Components/FirstComponent1'
import Greet from  './Components/GreetWithArrow'
import {WithoutDefaultExportGreet} from './Components/WithoutDefaultExport'
import GreetWF from './Components/GreetWithFunction'
import HelloWithJSX1 from './Components/HelloWithJSX'
import HelloWithoutJSX from './Components/HelloWithoutJSX'
import GreetWithProps from './Components/GreetWithProps'
import PropsWithClassComponent from './Components/PropsWithClassComponent'
import StateInClassComponent from './Components/StateInClassComponent'
import Counter from './Components/Counter'
import DestructuringInParam from './Components/DestructuringInFunctionParam'
import DestructuringInFunctionBody from './Components/DestructuringInFunctionBody'
import DestructuringInClass from './Components/DestructuringInClass'
import FunctionEventHandler from './Components/FunctionEventHandler'
import ClassEventHandler from './Components/ClassEventHandler'
import EventBind from './Components/EventBind'
import ParentComponent from './Components/ParentComponent'
import ConditionRenderingUsingIfElse from './Components/ConditionRenderingUsingIfElse'
import ConditionRenderingUsingVariable from './Components/ConditionRenderingUsingVariable'
import ConditionRenderingUsingTernaryCondtionalOperator from './Components/ConditionRenderingUsingTernaryCondtionalOperator'
import ConditionRenderingUsingShortCircuitOperator from  './Components/ConditionRenderingUsingShortCircuitOperator'
import NameList from './Components/ListRendering'
import ListOfObjectsRendering from './Components/ListRenderingUsingListOfObjects'
import DynamicContent from './Components/DynamicContentRender'
import HandlePropsUsingFunction from './UdemyComponent/HandlePropsUsingFunction'
import HandlePropsUsingClass from './UdemyComponent/HandlePropsUsingClass'
import ClickEventHandler from './UdemyComponent/ClickEventHandler'
import HandleStateUsingClass from './UdemyComponent/HandleStateUsingClass'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Udemy Course </h1>
        <HandleStateUsingClass />
        <br></br>
        <ClickEventHandler />
        <p>===============================================================</p>
        <h2>HandlePropsUsingClass</h2>
        <HandlePropsUsingClass name="Aarav" age="3" />
        <HandlePropsUsingClass name="Ayansh" age="2" >This is props.Children under class</HandlePropsUsingClass>
        <HandlePropsUsingClass name="pandey" age="4" />
        <p>===============================================================</p>
        <h2>HandlePropsUsingFunction</h2>
        <HandlePropsUsingFunction name="Aarav" age="3" />
        <HandlePropsUsingFunction name="Ayansh" age="2" >This is props.Children under Function</HandlePropsUsingFunction>
        <HandlePropsUsingFunction name="pandey" age="4" />
        <p>===============================================================</p>
        <h1>Hi This is React Application</h1>
        <DynamicContent />
        <p>===============================================================</p>
        <h1>List Iteration Starts</h1>
        <NameList />
        <ListOfObjectsRendering />
        <h1>List Iteration Ends</h1>
        <p>===============================================================</p>
        <ConditionRenderingUsingIfElse />
        <ConditionRenderingUsingVariable />
        <ConditionRenderingUsingTernaryCondtionalOperator />
        <ConditionRenderingUsingShortCircuitOperator />
        <p>===============================================================</p>
        <ParentComponent />
        <p>===============================================================</p>
        <EventBind />
        <p>===============================================================</p>
        <FunctionEventHandler />
        <ClassEventHandler />
        <p>===============================================================</p>
        <DestructuringInParam name="Aarav" heroName="ShaktiMaan" />
        <DestructuringInFunctionBody name="Aayansh" heroName="BatMan" />

        <DestructuringInClass name="Aayansh" heroName="BatMan" />
        <p>===============================================================</p>
        <Counter />
        <StateInClassComponent />
        <p>===============================================================</p>
        <PropsWithClassComponent name="Aarav" heroName="SuperMan" />
        <PropsWithClassComponent name="Aayansh" heroName="BatMan" />
        <p>===============================================================</p>
        <GreetWithProps name="PKP1" heroName="Batman">
          <h3>This is Children Props</h3>
        </GreetWithProps>
        <GreetWithProps name="PKP2" heroName="SuperMan">
          <button>Greeting</button>
        </GreetWithProps>
        <GreetWithProps name="PKP3" heroName="WonderWoman"/>
        <p>===============================================================</p>
        <HelloWithoutJSX />
        <HelloWithJSX1 />
        <p>===============================================================</p>
        <GreetWF />
        <WithoutDefaultExportGreet />
        <Greet />
        <p>===============================================================</p>
        <SecondComponent />
        <FirstComponent />
        <FirstTest />
      </div>
    );
  }
}

export default App;
