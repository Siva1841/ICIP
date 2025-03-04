import axios from 'axios';
import { fetchHealth } from '../utils/api';

// Mock axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('API utilities', () => {
  test('fetchHealth returns health status', async () => {
    const mockData = { status: 'healthy', timestamp: '2023-01-01T00:00:00', version: '1.0.0' };
    
    mockedAxios.get.mockResolvedValueOnce({ data: mockData });
    
    const result = await fetchHealth();
    expect(result).toEqual(mockData);
    expect(mockedAxios.get).toHaveBeenCalledWith('/api/v1/health');
  });
});