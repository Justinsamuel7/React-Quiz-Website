import React,{useState,useNavigate} from "react";
import "./style.css";
import {Router,Route,Link} from 'react-router-dom'
import Q1 from './Questions/Q1';


export default function TestInterface() {
  return(
    <React.Fragment>
      <div id="Qpartandmap">

      
        <div id="map">

          <div id="buttonsContainer">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>10</button>
            <button>11</button>
            <button>12</button>
            <button>13</button>
            <button>14</button>
            <button>15</button>
            <button>16</button>
            <button>17</button>
            <button>18</button>
            <button>19</button>
            <button>20</button>

          </div>

        </div>

        <div id="Qpart">
          <Q1/>

        </div>

      </div>
      



    </React.Fragment>
  )

}
