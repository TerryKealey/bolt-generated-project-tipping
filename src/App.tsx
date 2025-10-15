import {Page, Card, Select, Text} from '@shopify/polaris';
import {useState, useCallback} from 'react';

export default function App() {
  const [selectedShipping, setSelectedShipping] = useState('standard');
  const [showTips, setShowTips] = useState(true);

  const handleShippingChange = useCallback((value: string) => {
    setSelectedShipping(value);
    setShowTips(value !== 'doordash');
  }, []);

  const options = [
    {label: 'Standard Shipping', value: 'standard'},
    {label: 'Express Shipping', value: 'express'},
    {label: 'Doordash', value: 'doordash'},
  ];

  return (
    <Page title="Shipping Method">
      <Card>
        <Card.Section>
          <Select
            label="Select shipping method"
            options={options}
            onChange={handleShippingChange}
            value={selectedShipping}
          />
        </Card.Section>

        <Card.Section>
          <Text as="p" variant="bodyMd">
            Tipping is {showTips ? 'enabled' : 'disabled'} for this shipping method
          </Text>
        </Card.Section>
      </Card>
    </Page>
  );
}
