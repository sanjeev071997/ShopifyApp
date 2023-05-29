import { Layout, Page, Stack } from "@shopify/polaris";
import Sidebar from "../components/Sidebar";
import BarChart from "../components/BarChart";
import DataTables from "../components/DataTables";


export default function HomePage() {

  return (
    <Page fullWidth >
      <Stack.Item className="row row-offcanvas row-offcanvas-left">
        <Sidebar />
      </Stack.Item>
      <Layout >
        <Layout.Section>
          <div className="row mb-12 ">
            <div className="col-xl-6 col-sm-4 py-2">
              <div className="card text-dark bg-light h-100">
                <div className="card-body">
                  <h1 style={{ fontWeight: 'bold' }}>NEW NET INCOME</h1>
                  <h1 style={{ fontSize: '40px' }}>$ 8,245.00</h1>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-sm-4 py-2">
              <div className="card text-dark bg-light h-100">
                <div className="card-body">
                  <h1 style={{ fontWeight: 'bold' }}>TOTAL ORDER</h1>
                  <h1 style={{ fontSize: '40px' }}>1,256</h1>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-sm-4 py-2">
              <div className="card text-dark bg-light h-100">
                <div className="card-body">
                  <h1 style={{ fontWeight: 'bold' }}>AVERAGE SALES </h1>
                  <h1 style={{ fontSize: '40px' }}>$ 528.00</h1>
                </div>
              </div>
            </div>
          </div>
          <br />
          <BarChart />
          <br />
          <DataTables />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
