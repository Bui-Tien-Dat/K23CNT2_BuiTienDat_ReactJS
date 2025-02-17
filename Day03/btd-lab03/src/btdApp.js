import BtdClassComp from "./components/BtdClassComp";
import BtdFuncComp from "./components/BtdFuncComp";
import BtdJsxExpression from "./components/BtdJsxExpression";

function btdApp() {
  return (
    <div className="container border mt-3 bg-white">
        <h1>React JS lab03 - Bui Tien Dat</h1>

        <BtdJsxExpression />

        <hr/>
        {/*su dung function componemt*/}
        <BtdFuncComp/>

        {/*su dung class componemt*/}
        <BtdClassComp></BtdClassComp>
    </div>
  );
}

export default btdApp;
